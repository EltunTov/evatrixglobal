import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/lib/session";

export async function GET() {
  const user = await getCurrentUser();
  return NextResponse.json({ ok: true, user });
}