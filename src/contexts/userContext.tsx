"use client";

import { User } from "@/utils/types";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserContextType = {
  user: User;
  isLoggedIn: boolean;
  saveToLocalStorage: <T>(key: string, value: T) => void;
  setIsLoggedIn: (value: boolean) => void;
  setUser: (value: User) => void;
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
  const [user, setUser] = useState<Pick<User, "email" | "name">>({} as User);

  useEffect(() => {
    const storedUser = loadFromLocalStorage<User>("user");
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    setUser({} as User);
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
