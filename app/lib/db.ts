import crypto from "crypto";
import { neon } from "@neondatabase/serverless";

export type Role = "free" | "pro" | "admin";

export type UserRecord = {
  id: string;
  email: string;
  passwordHash: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
  verifiedAt: string | null;
  freeExpiresAt: string | null;
  proStartedAt: string | null;
  lastLoginAt: string | null;
};

export type CodeRecord = {
  email: string;
  code: string;
  expiresAt: string;
  createdAt: string;
};

type UserRow = {
  id: string;
  email: string;
  password_hash: string;
  role: string;
  created_at: string;
  updated_at: string;
  verified_at: string | null;
  free_expires_at: string | null;
  pro_started_at: string | null;
  last_login_at: string | null;
};

type CodeRow = {
  email: string;
  code: string;
  expires_at: string;
  created_at: string;
};

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is missing.");
}

const sql = neon(databaseUrl);

function mapUser(row: UserRow): UserRecord {
  return {
    id: row.id,
    email: row.email,
    passwordHash: row.password_hash,
    role: row.role as Role,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    verifiedAt: row.verified_at,
    freeExpiresAt: row.free_expires_at,
    proStartedAt: row.pro_started_at,
    lastLoginAt: row.last_login_at,
  };
}

function mapCode(row: CodeRow): CodeRecord {
  return {
    email: row.email,
    code: row.code,
    expiresAt: row.expires_at,
    createdAt: row.created_at,
  };
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

export function addHours(date: Date, hours: number) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

export async function upsertCode(email: string, code: string) {
  const normalized = normalizeEmail(email);
  const now = new Date();
  const createdAt = now.toISOString();
  const expiresAt = addMinutes(now, 10).toISOString();

  await sql`
    INSERT INTO verification_codes (email, code, created_at, expires_at)
    VALUES (${normalized}, ${code}, ${createdAt}, ${expiresAt})
    ON CONFLICT (email)
    DO UPDATE SET
      code = EXCLUDED.code,
      created_at = EXCLUDED.created_at,
      expires_at = EXCLUDED.expires_at
  `;
}

export async function getCode(email: string) {
  const normalized = normalizeEmail(email);

  const rows = await sql`
    SELECT email, code, expires_at, created_at
    FROM verification_codes
    WHERE email = ${normalized}
    LIMIT 1
  ` as unknown as CodeRow[];

  if (!rows.length) return null;
  return mapCode(rows[0]);
}

export async function verifyCode(email: string, code: string) {
  const normalized = normalizeEmail(email);

  const rows = await sql`
    SELECT email, code, expires_at, created_at
    FROM verification_codes
    WHERE email = ${normalized} AND code = ${code}
    LIMIT 1
  ` as unknown as CodeRow[];

  if (!rows.length) return false;

  const rec = rows[0];
  if (new Date(rec.expires_at).getTime() < Date.now()) return false;

  return true;
}

export async function consumeCode(email: string, code: string) {
  const normalized = normalizeEmail(email);

  await sql`
    DELETE FROM verification_codes
    WHERE email = ${normalized} AND code = ${code}
  `;
}

export async function findUserByEmail(email: string) {
  const normalized = normalizeEmail(email);

  const rows = await sql`
    SELECT
      id,
      email,
      password_hash,
      role,
      created_at,
      updated_at,
      verified_at,
      free_expires_at,
      pro_started_at,
      last_login_at
    FROM users
    WHERE email = ${normalized}
    LIMIT 1
  ` as unknown as UserRow[];

  if (!rows.length) return null;
  return mapUser(rows[0]);
}

export async function findUserById(id: string) {
  const rows = await sql`
    SELECT
      id,
      email,
      password_hash,
      role,
      created_at,
      updated_at,
      verified_at,
      free_expires_at,
      pro_started_at,
      last_login_at
    FROM users
    WHERE id = ${id}
    LIMIT 1
  ` as unknown as UserRow[];

  if (!rows.length) return null;
  return mapUser(rows[0]);
}

export async function createUser(email: string, password: string) {
  const normalized = normalizeEmail(email);
  const now = new Date().toISOString();

  const adminEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);

  const role: Role = adminEmails.includes(normalized) ? "admin" : "free";

  const user: UserRecord = {
    id: crypto.randomUUID(),
    email: normalized,
    passwordHash: hashPassword(password),
    role,
    createdAt: now,
    updatedAt: now,
    verifiedAt: now,
    freeExpiresAt: addHours(new Date(), 48).toISOString(),
    proStartedAt: null,
    lastLoginAt: now,
  };

  await sql`
    INSERT INTO users (
      id,
      email,
      password_hash,
      role,
      created_at,
      updated_at,
      verified_at,
      free_expires_at,
      pro_started_at,
      last_login_at
    )
    VALUES (
      ${user.id},
      ${user.email},
      ${user.passwordHash},
      ${user.role},
      ${user.createdAt},
      ${user.updatedAt},
      ${user.verifiedAt},
      ${user.freeExpiresAt},
      ${user.proStartedAt},
      ${user.lastLoginAt}
    )
  `;

  return user;
}

export async function validatePassword(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user) return null;
  if (user.passwordHash !== hashPassword(password)) return null;

  const now = new Date().toISOString();

  await sql`
    UPDATE users
    SET updated_at = ${now}, last_login_at = ${now}
    WHERE id = ${user.id}
  `;

  return {
    ...user,
    updatedAt: now,
    lastLoginAt: now,
  };
}

export async function listUsers(limit = 100) {
  const rows = await sql`
    SELECT
      id,
      email,
      password_hash,
      role,
      created_at,
      updated_at,
      verified_at,
      free_expires_at,
      pro_started_at,
      last_login_at
    FROM users
    ORDER BY created_at DESC
    LIMIT ${limit}
  ` as unknown as UserRow[];

  return rows.map(mapUser);
}

export async function getStats() {
  const totalRows = await sql`
    SELECT COUNT(*)::int AS count
    FROM users
  ` as unknown as { count: number }[];

  const freeRows = await sql`
    SELECT COUNT(*)::int AS count
    FROM users
    WHERE role = 'free'
  ` as unknown as { count: number }[];

  const proRows = await sql`
    SELECT COUNT(*)::int AS count
    FROM users
    WHERE role = 'pro'
  ` as unknown as { count: number }[];

  const adminRows = await sql`
    SELECT COUNT(*)::int AS count
    FROM users
    WHERE role = 'admin'
  ` as unknown as { count: number }[];

  const verifiedRows = await sql`
    SELECT COUNT(*)::int AS count
    FROM users
    WHERE verified_at IS NOT NULL
  ` as unknown as { count: number }[];

  const recentUsers = await listUsers(10);

  return {
    totalUsers: totalRows[0]?.count || 0,
    freeUsers: freeRows[0]?.count || 0,
    proUsers: proRows[0]?.count || 0,
    adminUsers: adminRows[0]?.count || 0,
    verifiedUsers: verifiedRows[0]?.count || 0,
    recentUsers,
  };
}