import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Clone the request and add the token to the headers
  const modifiedHeaders = new Headers(req.headers);
  modifiedHeaders.set("Authorization", `Bearer ${token}`);

  const modifiedReq = new Request(req.url, {
    ...req,
    headers: modifiedHeaders,
  });

  return NextResponse.next({
    request: modifiedReq,
  });
}

// Вказуємо, які шляхи мають бути захищені
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/api/protected-route"], // Додай свої приватні маршрути
};
