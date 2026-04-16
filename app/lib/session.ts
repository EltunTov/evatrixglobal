import crypto from "crypto";
import { cookies } from "next/headers";
import { readDb } from "./db";

const COOKIE_NAME = "evx_session";

function sign(value: string) {
  const secret = process.env.SESSION_SECRET || "dev-secret";
  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

export async function setSession(userId: string) {
  const payload = `${userId}.${sign(userId)}`;
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, payload, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 0,
  });
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  if (!raw) return null;

  const [userId, sig] = raw.split(".");
  if (!userId || !sig) return null;
  if (sign(userId) !== sig) return null;

  const db = readDb();
  return db.users.find((u) => u.id === userId) || null;
}