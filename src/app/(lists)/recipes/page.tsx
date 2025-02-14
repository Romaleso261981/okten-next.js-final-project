import React, { FC } from "react";
import { Center } from "@mantine/core";

import { pages } from "@/config";
import s from "./movies.module.css";
import { Categories } from "@/components/Categories/Categories";
import { Container, MovieList, PaginationComponent } from "@/components";
import { mockRecipes, tegs } from "@/constans/constans";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Discover Movies",
    description: pages.movie.discover.description
  };
}

const Discover: FC<ListPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const currentPage = Number(searchParams?.page) || 1;
  console.log(currentPage);


const total_pages = 10;

  return (
    <Container>
      <section className={s.wrapper}>
        <Categories categories={tegs.slice(0, 5)} />
        <h1>Trending now</h1>
        <MovieList recipes={mockRecipes.recipes} />
        <Center mt={30} mb={50}>
          {total_pages > 0 && <PaginationComponent total={10} />}
        </Center>
      </section>
    </Container>
  );
};

export default Discover;
