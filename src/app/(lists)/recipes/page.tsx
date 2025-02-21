import React from "react";

import Recipes from "@/components/Recipes/Recipes";
import Loader from "@/components/Loader/Loader";
import { Center, Container } from "@mantine/core";
import getRecipes, { IRecipesParams } from "../../../../actions/getRecipes";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

interface Props {
  searchParams: Promise<IRecipesParams>;
}

const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const data = await getRecipes(params);

  const message = data.message ? data.message : "No recipes found";

  if (!data.recipes) return <Loader message={message} />;

  return (
    <Container pt={20} pb={80}>
      <Recipes recipes={data.recipes} />
      <Center mt={20}>
        <PaginationComponent total={data.total} />
      </Center>
    </Container>
  );
};

export default Page;
