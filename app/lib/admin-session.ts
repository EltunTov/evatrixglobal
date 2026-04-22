import crypto from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "evx_admin_session";

function sign(value: string) {
  const secret = process.env.SESSION_SECRET || "dev-secret";
  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

function createAdminSessionValue(username: string) {
  return `${username}.${sign(username)}`;
}

const ADMIN_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 12,
};

export async function setAdminSession(username: string) {
  const cookieStore = await cookies();
  cookieStore.set(
    ADMIN_COOKIE_NAME,
    createAdminSessionValue(username),
    ADMIN_COOKIE_OPTIONS
  );
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, "", {
    ...ADMIN_COOKIE_OPTIONS,
    maxAge: 0,
  });
}

export async function hasAdminSession() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!raw) return false;

  const [username, sig] = raw.split(".");
  if (!username || !sig) return false;

  return sign(username) === sig;
}