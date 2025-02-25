import React, { FC, Suspense } from "react";
import { Container, RecipeList } from "@/components";

import s from "./recipes.module.css";
import Loader from "../Loader/Loader";
import { RecipeDetails } from "@/utils/types";
import RecipesListTitle from "../RecipesListTitle/RecipesListTitle";

type Props = { recipes: RecipeDetails[] };

const Recipes: FC<Props> = ({ recipes }) => {
  if (!recipes.length) return <Loader />;

  return (
    <Container>
      <section className={s.wrapper}>
        <Suspense fallback={<h3>Loading.....</h3>}>
          <RecipesListTitle />
        </Suspense>
        {recipes.length > 0 && <RecipeList recipes={recipes} />}
      </section>
    </Container>
  );
};

export default Recipes;
