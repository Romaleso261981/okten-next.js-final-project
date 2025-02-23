import { Flex, Group, Text, Title } from "@mantine/core";
import Image from "next/image";
import React, { Suspense } from "react";

import s from "./detail.module.css";
import { RecipeDetails } from "@/utils/types";
import { StarsRatingComponent } from "@/components/StarsRatingComponent/StarsRatingComponent";
import { TegsComponent } from "@/components";

type DetailProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: DetailProps) {
  const { id } = await params;

  const recipe: RecipeDetails = await fetch(
    "https://dummyjson.com/recipes/" + id
  ).then((res) => res.json());

  console.log("recipe", recipe);

  return (
    <div className={s.detailContainer}>
      <Flex className={s.posterWrapper}>
        <Image
          src={recipe.image}
          width={300}
          height={450}
          alt={recipe.name}
          className={s.poster}
          priority
          style={{ width: "auto", height: "auto" }}
        />
      </Flex>
      <Flex className={s.description}>
        <Title>{recipe.name}</Title>
        <Text>{`Status: ${recipe.rating}`}</Text>
        <Group>
          <StarsRatingComponent reating={recipe.rating} />
        </Group>
        <Suspense fallback={<div>Loading...</div>}>
          <TegsComponent tegs={recipe.tags} />
        </Suspense>
      </Flex>
      <Flex className="flex flex-row justify-around">
        <Flex className="flex flex-col">
          <Title>ingredients</Title>
          <ul>
            {recipe.ingredients.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ul>
        </Flex>
        <Flex className="flex flex-col">
          <Title>Instructions</Title>
          <ul>
            {recipe.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </div>
  );
}
