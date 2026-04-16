import { NextResponse } from "next/server";
import { normalizeEmail, validatePassword } from "@/app/lib/db";
import { setSession } from "@/app/lib/session";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = normalizeEmail(body.email || "");
    const password = String(body.password || "");

    const user = validatePassword(email, password);
    if (!user) {
      return NextResponse.json({ ok: false, error: "Invalid email or password." }, { status: 401 });
    }

    await setSession(user.id);
    return NextResponse.json({ ok: true, user });
  } catch {
    return NextResponse.json({ ok: false, error: "Login failed." }, { status: 500 });
  }
}