import React, { FC } from "react";
import { Center } from "@mantine/core";

import { pages } from "@/config";
import {
  Container,
  MovieList,
  PaginationComponent,
  TegsComponent
} from "@/components";
import { mockRecipes } from "@/constans/constans";

import s from "./recipes.module.css";

interface ListPageProps {
  searchParams: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "All recipes",
    description: pages.recipes.description
  };
}

const Recipes: FC<ListPageProps> = async ({ searchParams }) => {
  const currentPage = Number(searchParams.page) || 1;
  console.log(currentPage);

  const total_pages = 100;

  const tegs = await fetch("https://dummyjson.com/recipes/tags").then(res =>
    res.json()
  );

  return (
    <Container>
      <section className={s.wrapper}>
        <TegsComponent tegs={tegs.slice(0, 5)} />
        <h1>Trending now</h1>
        <MovieList recipes={mockRecipes.recipes} />
        <Center mt={30} mb={50}>
          {total_pages > 0 && <PaginationComponent total={10} />}
        </Center>
      </section>
    </Container>
  );
};

export default Recipes;
