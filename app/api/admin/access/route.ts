import { NextResponse } from "next/server";
import { clearAdminSession, setAdminSession } from "@/app/lib/admin-session";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const username = String(body.username || "").trim();
    const password = String(body.password || "").trim();

    const expectedUsername = process.env.ADMIN_PANEL_USERNAME || "";
    const expectedPassword = process.env.ADMIN_PANEL_PASSWORD || "";

    if (!expectedUsername || !expectedPassword) {
      return NextResponse.json(
        { ok: false, error: "Admin credentials are not configured." },
        { status: 500 }
      );
    }

    if (username !== expectedUsername || password !== expectedPassword) {
      return NextResponse.json(
        { ok: false, error: "Invalid admin username or password." },
        { status: 401 }
      );
    }

    await setAdminSession(username);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Admin login failed." },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  await clearAdminSession();
  return NextResponse.json({ ok: true });
}