import { Flex, Group, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

import s from "./detail.module.css";
import { RecipeDetails } from "@/utils/types";

type DetailProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: DetailProps) {
  const { id } = params;

  const recipe: RecipeDetails = await fetch(
    "https://dummyjson.com/recipes/1" + id
  ).then(res => res.json());

  console.log(recipe);

  return (
    <div>
      <Flex className={s.wrapper}>
        <Flex className={s.descriptionWrapper}>
          <Flex className={s.posterWrapper}>
            <Image
              src={recipe.image}
              width={300}
              height={450}
              alt={recipe.name}
            />
          </Flex>
          <Flex>
            <Flex className={s.description}>
              <Title>
                {recipe.name}
              </Title>
              <Text>{`Status: ${recipe.rating}`}</Text>
              <Group>
                {/* <Button>Video</Button> */}
                {/* <StarsRatingComponent reating={vote_average} /> */}
              </Group>
              {/* <Flex>
                <Categories categories={genres} />
              </Flex> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
