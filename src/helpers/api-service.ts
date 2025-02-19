import Cookies from "js-cookie";

type ReturnFetchData<T> = {
  data: T;
  total: number;
};

export const getData = async <T>({
  url,
  skip,
  limit
}: {
  url: string;
  skip: number;
  limit: number;
}): Promise<ReturnFetchData<T>> => {
  try {
    const token = Cookies.get("authToken"); // Get token from cookies
    const response = await fetch(`${url}?limit=${limit}&skip=${skip}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data: " + response.statusText);
    }

    const { data, total } = await response.json();

    return { data, total };
  } catch (error) {
    console.error("Error fetching data", error);
    return { data: ([] as unknown) as T, total: 0 };
  }
};

export default getData;
