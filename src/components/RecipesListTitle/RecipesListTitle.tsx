"use client";

import React from "react";
import s from "./recipesListTitle.module.css";
import { useSearchParams } from "next/navigation";
import { Center } from "@mantine/core";

export default function RecipesListTitle() {
  const searchParams = useSearchParams();
  if (!searchParams) return null;
  const teg = searchParams.get("teg");

  return (
    <Center>
      <h1 className={s.title}>{teg ? `${teg}` : "Trending now"}</h1>
    </Center>
  );
}
