import { NextResponse } from "next/server";
import { getStats, listUsers } from "@/app/lib/db";
import { getCurrentUser } from "@/app/lib/session";

export async function GET() {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "admin") {
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