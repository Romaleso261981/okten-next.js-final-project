import { BASE_URL_DAMMYJSON } from "@/constans/constans";

export interface IUsersParams {
  q?: string | null;
  limit?: string | null;
  skip?: string | null;
}

export default async function getUsers(params: IUsersParams) {
  try {
    const { q = "", limit = 10, skip = 0 } = params;

    const res = await fetch(
      `${BASE_URL_DAMMYJSON}/users/search?q=${q}&limit=${limit}&skip=${skip}`,
      {
        cache: "no-store"
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
