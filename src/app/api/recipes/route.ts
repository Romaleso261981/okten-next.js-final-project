import { BASE_URL_DAMMYJSON } from "@/constans/constans";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const skip = parseInt(searchParams.get("skip") || "0", 10);

  const cookies = req.headers.get("cookie");
  const accessToken = cookies?.split("; ")
    .find(row => row.startsWith("accessToken="))?.split("=")[1];

  if (!accessToken) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const res = await fetch(
      `${BASE_URL_DAMMYJSON}/auth/recipes?limit=${limit}&skip=${skip}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    const data = await res.json();

    console.log("data", data);

    return NextResponse.json(
      { recipes: data.recipes, total: data.total },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error fetching users: ${error}` },
      { status: 500 }
    );
  }
}
