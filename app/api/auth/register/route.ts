import { NextResponse } from "next/server";
import { consumeCode, createUser, findUserByEmail, normalizeEmail, verifyCode } from "@/app/lib/db";
import { setSession } from "@/app/lib/session";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = normalizeEmail(body.email || "");
    const code = String(body.code || "").trim();
    const password = String(body.password || "");

    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Valid email required." }, { status: 400 });
    }

    if (!code || code.length < 6) {
      return NextResponse.json({ ok: false, error: "Verification code required." }, { status: 400 });
    }

    if (!password || password.length < 6) {
      return NextResponse.json({ ok: false, error: "Password must be at least 6 characters." }, { status: 400 });
    }

    if (findUserByEmail(email)) {
      return NextResponse.json({ ok: false, error: "Account already exists." }, { status: 400 });
    }

    if (!verifyCode(email, code)) {
      return NextResponse.json({ ok: false, error: "Invalid or expired code." }, { status: 400 });
    }

    const user = createUser(email, password);
    consumeCode(email, code);
    await setSession(user.id);

    return NextResponse.json({ ok: true, user });
  } catch {
    return NextResponse.json({ ok: false, error: "Registration failed." }, { status: 500 });
  }
}