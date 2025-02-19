"use client";

import React, { FC, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Center } from "@mantine/core";
import { Container, RecipeList } from "@/components";
import { UserContext } from "@/contexts/userContext";

import s from "./recipes.module.css";
import Loader from "../Loader/Loader";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

const Recipes: FC<Props> = ({ data }) => {
  const { tegs, recipes } = data;
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

  if (!tegs.length || !recipes.length) return <Loader />;

  // const limitedTegs = tegs.slice(0, 5);

  return (
    <Container>
      <section className={s.wrapper}>
        {/* {limitedTegs.length > 0 && <TegsComponent tegs={limitedTegs} />} */}
        <h1 className={s.title}>Trending now</h1>
        {recipes.length > 0 && <RecipeList recipes={recipes} />}
        <Center mt={30} mb={50}>
          {/* {total > limit &&
            <PaginationComponent
              total={total}
              setSkip={setSkip}
              limit={limit}
            />} */}
        </Center>
      </section>
    </Container>
  );
};

export default Recipes;
