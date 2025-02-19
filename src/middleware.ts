// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken");

  if (token) return NextResponse.next();
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("Authorization", `Bearer ${token}`);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  return response;
}
