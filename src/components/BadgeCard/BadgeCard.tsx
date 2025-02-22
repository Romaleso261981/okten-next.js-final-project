"use client";

import { IconHeart } from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Text
} from "@mantine/core";
import classes from "./BadgeCard.module.css";
import { Recipe } from "@/utils/types";
import { useRouter } from "next/navigation";

type BadgeCardProps = {
  recipe: Recipe;
};

export function BadgeCard({ recipe }: BadgeCardProps) {
  const router = useRouter();
  const features = recipe.ingredients.map((ingredient, index) =>
    <Badge variant="light" key={index} size="sm">
      {ingredient}
    </Badge>
  );

  const handleCardClick = () => {
    router.push(`/recipe/${recipe.id}`);
  };

  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "750px",
        cursor: "pointer"
      }}
    >
      <Flex direction="column">
        <Card.Section>
          <Image src={recipe.image} alt={recipe.name} height={180} />
        </Card.Section>

        <Flex h={"80px"} direction={"column"} mt={20} justify="space-between">
          <Text fz="lg" fw={500}>
            {recipe.name}
          </Text>
          <Badge size="sm" variant="light">
            Country: {recipe.cuisine}
          </Badge>
        </Flex>
      </Flex>
      <Flex direction={"column"} h={"100%"} justify={"space-between"}>
        <Flex direction={"column"}>
          <Text mt="md" className={classes.label} c="dimmed">
            Ingredients:
          </Text>
          <Group gap={7} mt={5}>
            {features}
          </Group>
        </Flex>
        <Group mt="xs" style={{ marginTop: "auto" }}>
          <Button radius="md" style={{ flex: 1 }} onClick={handleCardClick}>
            Show details
          </Button>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart className={classes.like} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Flex>
    </Card>
  );
}
