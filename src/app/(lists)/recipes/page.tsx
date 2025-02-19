import React, { FC } from "react";
import { Container } from "@/components";

import Recipes from "@/components/Recipes/Recipes";
import getData from "@/helpers/api-service";

const data = getData({ url: "/recipes", skip: 0, limit: 10 });

const RecipesPage: FC = () => {
  return (
    <Container>
      <Recipes data={data} />
    </Container>
  );
};

export default RecipesPage;
