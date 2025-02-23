"use client";

import { createContext, ReactNode, useState } from "react";

import { RecipesResponse } from "@/utils/types";

type RecipesContextType = {
  isLoading: boolean;
  recipesRespons: RecipesResponse | null;
  setIsLoading: (value: boolean) => void;
  setRecipesRespons: (value: RecipesResponse) => void;
};

type RecipesProviderProps = {
  children: ReactNode;
};

export const RecipesContext = createContext({} as RecipesContextType);

export function RecipesProvider({ children }: RecipesProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recipesRespons, setRecipesRespons] = useState<RecipesResponse | null>(
    null
  );

  return (
    <RecipesContext.Provider
      value={{
        isLoading,
        recipesRespons,
        setIsLoading,
        setRecipesRespons
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}
