import { NextResponse } from "next/server";
import { generateCode, normalizeEmail, upsertCode } from "@/app/lib/db";
import { sendVerificationEmail } from "@/app/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = normalizeEmail(body.email || "");

    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Valid email required." }, { status: 400 });
    }

    const code = generateCode();
    upsertCode(email, code);
    await sendVerificationEmail(email, code);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send code." }, { status: 500 });
  }
}