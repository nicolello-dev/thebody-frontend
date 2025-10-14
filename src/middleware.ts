import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserFromId } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const userId = req.cookies.get("userId")?.value;
  const user = userId ? await getUserFromId(userId) : null;
  if (
    !user &&
    !req.nextUrl.pathname.startsWith("/login") &&
    !req.nextUrl.pathname.startsWith("/api") &&
    req.nextUrl.pathname.indexOf(".") === -1 // Exclude all files in the public folder
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
