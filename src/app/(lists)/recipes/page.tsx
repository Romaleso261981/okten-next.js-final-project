"use client";

import React, { FC, useEffect, useState } from "react";

import Recipes from "@/components/Recipes/Recipes";
import Loader from "@/components/Loader/Loader";
import { RecipeDetails } from "@/utils/types";
import { LIMIT } from "@/constans/constans";
import { Center, Container, Pagination } from "@mantine/core";

const Page: FC = () => {
  const [activePage, setPage] = useState(1);
  const [recipes, setRecipes] = useState<RecipeDetails[] | null>(null);
  const [total, setTotal] = useState<number>(0);

  useEffect(
    () => {
      const fetchUsers = async () => {
        try {
          const res = await fetch(
            `https://okten-next-js-final-project.vercel.app/api/recipes?limit=${LIMIT}&skip=${activePage *
              10}`
          );
          if (!res.ok) throw new Error("Failed to fetch users");

          const data = await res.json();

          setRecipes(data.recipes);
          setTotal(data.total);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUsers();
    },
    [activePage]
  );

  if (!recipes) return <Loader />;

  return (
    <Container pt={20} pb={80}>
      <Recipes recipes={recipes} />
      <Center mt={20}>
        <Pagination total={total / 10} onChange={setPage} />
      </Center>
    </Container>
  );
};

export default Page;
