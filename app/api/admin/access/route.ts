import { NextResponse } from "next/server";
import { clearAdminSession, setAdminSession } from "@/app/lib/admin-session";

const FALLBACK_ADMIN_USERNAME = "adminevatrix";
const FALLBACK_ADMIN_PASSWORD = "evatrix2026";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const username = String(body.username || "").trim().toLowerCase();
    const password = String(body.password || "").trim();

    const expectedUsername = String(
      process.env.ADMIN_PANEL_USERNAME || FALLBACK_ADMIN_USERNAME
    )
      .trim()
      .toLowerCase();

    const expectedPassword = String(
      process.env.ADMIN_PANEL_PASSWORD || FALLBACK_ADMIN_PASSWORD
    ).trim();

    if (!username || !password) {
      return NextResponse.json(
        { ok: false, error: "Username and password are required." },
        { status: 400 }
      );
    }

    if (username !== expectedUsername || password !== expectedPassword) {
      return NextResponse.json(
        { ok: false, error: "Invalid admin username or password." },
        { status: 401 }
      );
    }

    await setAdminSession(expectedUsername);

    return NextResponse.json({
      ok: true,
      username: expectedUsername,
    });
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