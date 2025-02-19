"use client";

import { LoginResponse, ShortUser } from "@/utils/types";
import { createContext, ReactNode, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

type UserContextType = {
  user: ShortUser | null;
  isLoggedIn: boolean;
  login: (
    data: {
      accessToken: string;
      refreshToken: string;
      lastName: string;
      firstName: string;
    }
  ) => Promise<boolean>;
  setIsLoggedIn: (value: boolean) => void;
  setUser: (value: ShortUser) => void;
  logout: () => void;
};

type CardsProviderProps = {
  children: ReactNode;
};

function saveToLocalStorage<T>(key: string, value: T): void {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}

function loadFromLocalStorage<T>(key: string): T | null {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }

    if (serializedValue === "undefined") {
      return null;
    }

    return JSON.parse(serializedValue) as T;
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return null;
  }
}

function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: CardsProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<ShortUser | null>(null);

  const login = async (data: LoginResponse) => {
    try {
      if (data) {
        const newUser = {
          lastName: data.lastName,
          firstName: data.firstName
        };
        saveToLocalStorage("user", newUser);
        Cookies.set("authToken", data.accessToken, { expires: 7 });
        Cookies.set("refreshToken", data.refreshToken, { expires: 7 });
        setIsLoggedIn(true);
        setUser(newUser);
        return true;
      } else {
        console.error("Помилка реєстрації");
        return false;
      }
    } catch (error) {
      console.error("Помилка з'єднання", error);
      return false;
    }
  };

  const router = useRouter();

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    removeFromLocalStorage("user");
    Cookies.remove("authToken");
    Cookies.remove("refreshToken");
    router.push("/login");
  };

  useEffect(() => {
    const storedUser = loadFromLocalStorage<ShortUser>("user");
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        setIsLoggedIn,
        setUser,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
