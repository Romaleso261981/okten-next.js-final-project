import React, { FC, Suspense } from "react";
import { Center } from "@mantine/core";

import { pages } from "@/config";
import {
  Container,
  PaginationComponent,
  RecipeList,
  TegsComponent
} from "@/components";

import s from "./recipes.module.css";

export async function generateMetadata() {
  return {
    title: "All recipes",
    description: pages.recipes.description
  };
}

const Recipes: FC = async () => {
  const total_pages = 100;

  const tegs = await fetch("https://dummyjson.com/recipes/tags").then(res =>
    res.json()
  );

  const { recipes } = await fetch("https://dummyjson.com/recipes").then(res =>
    res.json()
  );

  return (
    <Container>
      <section className={s.wrapper}>
        <Suspense fallback={<div>Loading...</div>}>
          <TegsComponent tegs={tegs.slice(0, 5)} />
        </Suspense>
        <h1 className={s.title}>Trending now</h1>
        <RecipeList recipes={recipes} />
        <Center mt={30} mb={50}>
          {total_pages > 0 && <PaginationComponent total={10} />}
        </Center>
      </section>
    </Container>
  );
};

export default Recipes;
