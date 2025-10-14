import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { key, value } = await req.json();

  if (!key || !value) {
    return NextResponse.json(
      { message: "Key and value are required" },
      { status: 400 }
    );
  }
  const cookieStore = await cookies();

  cookieStore.set(key, value);
  return NextResponse.json({ message: "Cookie set successfully" });
}
