import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const cookies = req.headers.get("cookie");
  const accessToken = cookies?.split("; ")
    .find(row => row.startsWith("accessToken="))?.split("=")[1];

  if (accessToken) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("Authorization", `Bearer ${accessToken}`);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });

    return response;
  }

  return NextResponse.next();
}
