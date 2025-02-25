import { BASE_URL_DAMMYJSON } from "@/constans/constans";
import { RecipesResponse } from "@/utils/types";
import { cookies } from "next/headers";

export interface IRecipesParams {
  q?: string | null;
  limit?: string | null;
  skip?: string | null;
  teg?: string | null;
}

export default async function getRecipes(params: IRecipesParams) {
  try {
    const { q = "", limit = 10, skip = 0, teg = "" } = params;
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    let data = {} as RecipesResponse & { message: string };

    if (teg !== "") {
      const res = await fetch(`${BASE_URL_DAMMYJSON}/auth/recipes/tag/${teg}`, {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      data = await res.json();
      return data;
    }

    const res = await fetch(
      `${BASE_URL_DAMMYJSON}/auth/recipes/search?q=${q}&limit=${limit}&skip=${skip}&teg=${teg}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
