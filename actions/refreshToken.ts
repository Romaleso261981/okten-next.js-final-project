import axios from "axios";

const refreshTokenPair = async (token: string) => {
  try {
    const response = await axios.post("YOUR_ENDPOINT_URL", {
      refreshToken: token
    });

    const { accessToken, refreshToken } = response.data;

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

export default refreshTokenPair;
