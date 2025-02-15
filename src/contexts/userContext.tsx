"use client";

import { User } from "@/utils/types";
import { createContext, ReactNode, useState } from "react";

type UserContextType = {
  user: User;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  setUser: (value: User) => void;
};

type CardsProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: CardsProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        setUser,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
