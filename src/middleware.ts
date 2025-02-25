import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const cookies = req.headers.get("cookie");
  const accessToken = cookies
    ?.split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/users") && pathname.startsWith("/recipes")) {
    if (!accessToken) {
      return Response.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
