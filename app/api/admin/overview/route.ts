import { NextResponse } from "next/server";
import { getStats, listUsers } from "@/app/lib/db";
import { hasAdminSession } from "@/app/lib/admin-session";

export async function GET() {
  const authorized = await hasAdminSession();

  if (!authorized) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized." },
      { status: 403 }
    );
  }

  const stats = await getStats();
  const users = await listUsers(100);

  return NextResponse.json({
    ok: true,
    stats,
    users,
  });
}