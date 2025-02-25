import axios from "axios";
import refreshTokenPair from "../actions/refreshToken";

export const API = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const fetcher = async (url: string) => {
  try {
    const response = await API.get(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

API.interceptors.request.use(
  (config) => {
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken"));
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken.split("=")[1]}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      const refreshToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken"));
      if (refreshToken && !refreshToken.includes("undefined")) {
        refreshTokenPair(refreshToken.split("=")[1]);
      }
    }
    return Promise.reject(error);
  }
);
