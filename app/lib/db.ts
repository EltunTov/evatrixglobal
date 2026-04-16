import fs from "fs";
import path from "path";
import crypto from "crypto";

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

type AppDb = {
  users: UserRecord[];
  codes: CodeRecord[];
};

const DB_PATH = path.join(process.cwd(), "data", "app.json");

function ensureDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ users: [], codes: [] }, null, 2), "utf-8");
  }
}

export function readDb(): AppDb {
  ensureDb();
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw) as AppDb;
}

export function writeDb(db: AppDb) {
  ensureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
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

export function upsertCode(email: string, code: string) {
  const db = readDb();
  const normalized = normalizeEmail(email);
  const now = new Date();

  db.codes = db.codes.filter(
    (c) => !(normalizeEmail(c.email) === normalized)
  );

  db.codes.push({
    email: normalized,
    code,
    createdAt: now.toISOString(),
    expiresAt: addMinutes(now, 10).toISOString(),
  });

  writeDb(db);
}

export function verifyCode(email: string, code: string) {
  const db = readDb();
  const normalized = normalizeEmail(email);
  const now = Date.now();

  const rec = db.codes.find(
    (c) => normalizeEmail(c.email) === normalized && c.code === code
  );

  if (!rec) return false;
  if (new Date(rec.expiresAt).getTime() < now) return false;
  return true;
}

export function consumeCode(email: string, code: string) {
  const db = readDb();
  const normalized = normalizeEmail(email);

  db.codes = db.codes.filter(
    (c) => !(normalizeEmail(c.email) === normalized && c.code === code)
  );

  writeDb(db);
}

export function findUserByEmail(email: string) {
  const db = readDb();
  const normalized = normalizeEmail(email);
  return db.users.find((u) => normalizeEmail(u.email) === normalized) || null;
}

export function createUser(email: string, password: string) {
  const db = readDb();
  const normalized = normalizeEmail(email);
  const now = new Date();
  const adminEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);

  const isAdmin = adminEmails.includes(normalized);

  const user: UserRecord = {
    id: crypto.randomUUID(),
    email: normalized,
    passwordHash: hashPassword(password),
    role: isAdmin ? "admin" : "free",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    verifiedAt: now.toISOString(),
    freeExpiresAt: addHours(now, 48).toISOString(),
    proStartedAt: null,
    lastLoginAt: now.toISOString(),
  };

  db.users.push(user);
  writeDb(db);
  return user;
}

export function validatePassword(email: string, password: string) {
  const user = findUserByEmail(email);
  if (!user) return null;
  if (user.passwordHash !== hashPassword(password)) return null;

  const db = readDb();
  const idx = db.users.findIndex((u) => u.id === user.id);
  if (idx >= 0) {
    db.users[idx].lastLoginAt = new Date().toISOString();
    db.users[idx].updatedAt = new Date().toISOString();
    writeDb(db);
    return db.users[idx];
  }

  return user;
}

export function getStats() {
  const db = readDb();
  return {
    totalUsers: db.users.length,
    freeUsers: db.users.filter((u) => u.role === "free").length,
    proUsers: db.users.filter((u) => u.role === "pro").length,
    adminUsers: db.users.filter((u) => u.role === "admin").length,
    verifiedUsers: db.users.filter((u) => !!u.verifiedAt).length,
    recentUsers: [...db.users]
      .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
      .slice(0, 10),
  };
}