import { NextResponse } from "next/server";
import {
  createUser,
  findUserByEmail,
  normalizeEmail,
} from "@/app/lib/db";
import { setSession } from "@/app/lib/session";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = normalizeEmail(body.email || "");
    const password = String(body.password || "");

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Valid email required." },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { ok: false, error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    const existing = await findUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { ok: false, error: "Account already exists." },
        { status: 400 }
      );
    }

    const user = await createUser(email, password);
    await setSession(user.id);

    return NextResponse.json({ ok: true, user });
  } catch (error) {
    console.error("REGISTER_ROUTE_ERROR", error);
    return NextResponse.json(
      { ok: false, error: "Registration failed." },
      { status: 500 }
    );
  }
}