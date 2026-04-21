import { NextResponse } from "next/server";
import { normalizeEmail, validatePassword } from "@/app/lib/db";
import {
  COOKIE_NAME,
  SESSION_COOKIE_OPTIONS,
  createSessionValue,
} from "@/app/lib/session";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = normalizeEmail(body.email || "");
    const password = String(body.password || "");

    const user = await validatePassword(email, password);

    if (!user) {
      return NextResponse.json(
        { ok: false, error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const res = NextResponse.json({ ok: true, user });

    res.cookies.set(
      COOKIE_NAME,
      createSessionValue(user.id),
      SESSION_COOKIE_OPTIONS
    );

    return res;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Login failed." },
      { status: 500 }
    );
  }
}