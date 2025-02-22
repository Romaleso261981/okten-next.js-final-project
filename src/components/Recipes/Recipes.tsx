"use client";

import React, { FC } from "react";
import { Container, RecipeList } from "@/components";

import s from "./recipes.module.css";
import Loader from "../Loader/Loader";
import { RecipeDetails } from "@/utils/types";

type Props = { recipes: RecipeDetails[] };

const Recipes: FC<Props> = ({ recipes }) => {
  if (!recipes.length) return <Loader />;

  return (
    <Container>
      <section className={s.wrapper}>
        <h1 className={s.title}>Trending now</h1>
        {recipes.length > 0 && <RecipeList recipes={recipes} />}
      </section>
    </Container>
  );
};

export default Recipes;
