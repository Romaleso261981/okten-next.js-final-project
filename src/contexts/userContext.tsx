"use client";

import { ShortUser } from "@/utils/types";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserContextType = {
  user: ShortUser;
  isLoggedIn: boolean;
  saveToLocalStorage: <T>(key: string, value: T) => void;
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
    return JSON.parse(serializedValue) as T;
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return null;
  }
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: CardsProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<ShortUser>({} as ShortUser);

  useEffect(() => {
    const storedUser = loadFromLocalStorage<ShortUser>("user");
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    setUser({} as ShortUser);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        user,
        saveToLocalStorage,
        setIsLoggedIn,
        setUser,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
