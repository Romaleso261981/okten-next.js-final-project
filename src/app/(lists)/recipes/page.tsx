"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import { Center } from "@mantine/core";
import { Container, RecipeList, TegsComponent } from "@/components";
import s from "./recipes.module.css";
import { RecipeDetails } from "@/utils/types";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

type ReturnFetchData = {
  tegs: string[];
  recipes: RecipeDetails[];
  total: number;
};

const getData = async ({
  skip,
  limit
}: {
  skip: number;
  limit: number;
}): Promise<ReturnFetchData> => {
  try {
    const [tegsResponse, recipesResponse] = await Promise.all([
      fetch("https://dummyjson.com/recipes/tags"),
      fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
    ]);

    if (!tegsResponse.ok || !recipesResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const tegs = await tegsResponse.json();
    const { recipes, total } = await recipesResponse.json();

    return { tegs, recipes, total };
  } catch (error) {
    console.error("Error fetching data", error);
    return { tegs: [], recipes: [], total: 0 };
  }
};

const Recipes: FC = () => {
  const [tegs, setTegs] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<RecipeDetails[]>([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const router = useRouter();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(
    () => {
      if (isLoggedIn === false) {
        router.push("/login");
      }
    },
    [isLoggedIn, router]
  );

  useEffect(
    () => {
      const fetchData = async () => {
        const { tegs, recipes, total } = await getData({ skip, limit });
        setTegs(tegs);
        setRecipes(recipes);
        setTotal(total);
      };

      fetchData();
    },
    [skip]
  );

  if (!tegs.length || !recipes.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-5xl text-orange-400">Loading...</h1>
      </div>
    );
  }

  const limitedTegs = tegs.slice(0, 5);

  return (
    <Container>
      <section className={s.wrapper}>
        {limitedTegs.length > 0 && <TegsComponent tegs={limitedTegs} />}
        <h1 className={s.title}>Trending now</h1>
        {recipes.length > 0 && <RecipeList recipes={recipes} />}
        <Center mt={30} mb={50}>
          {total > limit &&
            <PaginationComponent
              total={total}
              setSkip={setSkip}
              limit={limit}
            />}
        </Center>
      </section>
    </Container>
  );
};

export default Recipes;
