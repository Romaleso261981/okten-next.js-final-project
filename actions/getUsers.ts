import { BASE_URL_DAMMYJSON } from "@/constans/constans";
import { cookies } from "next/headers";

export interface IUsersParams {
  q?: string | null;
  limit?: string | null;
  skip?: string | null;
}

export default async function getUsers(params: IUsersParams) {
  try {
    const { q = "", limit = 10, skip = 0 } = params;
     const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;

        if (!accessToken) {
          throw new Error("Access token not found");
        }

    const res = await fetch(
      `${BASE_URL_DAMMYJSON}/auth/users/search?q=${q}&limit=${limit}&skip=${skip}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
