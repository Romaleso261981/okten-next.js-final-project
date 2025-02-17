"use client";

import { ShortUser } from "@/utils/types";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserContextType = {
  user: ShortUser | null;
  isLoggedIn: boolean;
  login: (user: ShortUser) => Promise<boolean>;
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
  const [user, setUser] = useState<ShortUser | null>({} as ShortUser);

  const login = async (user: ShortUser) => {
    try {
      if (user) {
        saveToLocalStorage("user", user);
        setIsLoggedIn(true);
        setUser(user);
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

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    removeFromLocalStorage("user");
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
