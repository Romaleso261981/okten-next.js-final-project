import { BASE_URL_DAMMYJSON } from "@/constans/constans";

export default async function getTegs(url: string) {
  try {
    const res = await fetch(`${BASE_URL_DAMMYJSON}/${url}/tags`);

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
