"use client";

import React, { FC, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, RecipeList } from "@/components";
import { UserContext } from "@/contexts/userContext";

import s from "./recipes.module.css";
import Loader from "../Loader/Loader";
import { RecipeDetails } from "@/utils/types";

type Props = { recipes: RecipeDetails[] };

const Recipes: FC<Props> = ({ recipes }) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(
    () => {
      if (user === null) {
        router.push("/login");
      }
    },
    [user, router]
  );

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
