"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import { Center } from "@mantine/core";
import {
  Container,
  PaginationComponent,
  RecipeList,
  TegsComponent
} from "@/components";
import s from "./recipes.module.css";
import { RecipeDetails } from "@/utils/types";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

type FetchData = {
  tegs: string[];
  recipes: RecipeDetails[];
};

const getData = async (): Promise<FetchData> => {
  try {
    const tegsResponse = await fetch("https://dummyjson.com/recipes/tags");
    const tegs = await tegsResponse.json();

    const recipesResponse = await fetch("https://dummyjson.com/recipes");
    const { recipes } = await recipesResponse.json();

    return { tegs, recipes };
  } catch (error) {
    console.error("Error fetching data", error);
    return { tegs: [], recipes: [] };
  }
};

const Recipes: FC = () => {
  const [tegs, setTegs] = useState<string[] | null>(null);
  const [recipes, setRecipes] = useState<RecipeDetails[] | null>(null);
  const total_pages = 100;
  const router = useRouter();

  const { isLoggedIn } = useContext(UserContext);

  useEffect(
    () => {
      if (!isLoggedIn) {
        router.push("/login");
      }
    },
    [isLoggedIn, router]
  );

  useEffect(() => {
    const fetchData = async () => {
      const { tegs, recipes } = await getData();
      setTegs(tegs);
      setRecipes(recipes);
    };

    fetchData();
  }, []);

  if (!tegs || !recipes) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-5xl text-orange-400">Loading...</h1>
      </div>
    );
  }

  const limitedTegs = tegs.slice(0, 5);

  return (
    <Container>
      <section className={s.wrapper}>
        {limitedTegs && <TegsComponent tegs={limitedTegs} />}
        <h1 className={s.title}>Trending now</h1>
        {recipes && <RecipeList recipes={recipes} />}
        <Center mt={30} mb={50}>
          {total_pages > 0 && <PaginationComponent total={10} />}
        </Center>
      </section>
    </Container>
  );
};

export default Recipes;
