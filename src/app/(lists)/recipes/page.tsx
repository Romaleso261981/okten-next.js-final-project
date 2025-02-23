import React from "react";

import Recipes from "@/components/Recipes/Recipes";
import Loader from "@/components/Loader/Loader";
import { Center, Container } from "@mantine/core";
import getRecipes, { IRecipesParams } from "../../../../actions/getRecipes";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import getTegs from "../../../../actions/getTegs";
import { TegsComponent } from "@/components";

interface Props {
  searchParams: Promise<IRecipesParams>;
}

const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const data = await getRecipes(params);
  const tegs = await getTegs("recipes");

  const message = data ? data?.message : "No recipes found";

  if (!data.recipes) return <Loader message={message} />;

  return (
    <Container pt={20} pb={80}>
      <TegsComponent tegs={tegs} />
      <Recipes recipes={data.recipes} />
      <Center mt={20}>
        <PaginationComponent total={data.total} />
      </Center>
    </Container>
  );
};

export default Page;
