import { BASE_URL_DAMMYJSON } from "@/constans/constans";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = parseInt(searchParams.get("skip") || "0", 10);

  try {
    const res = await fetch(
      `${BASE_URL_DAMMYJSON}/users?limit=${limit}&skip=${skip}`,
      {
        cache: "no-store"
      }
    );
    const data = await res.json();

    return NextResponse.json(
      { data: data.users, total: data.total },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error fetching users: ${error}` },
      { status: 500 }
    );
  }
}
