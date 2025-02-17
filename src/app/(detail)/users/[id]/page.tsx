import { Flex, Text, Title } from "@mantine/core";
import React from "react";

import s from "./detail.module.css";
import { User } from "@/utils/types";

type DetailProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: DetailProps) {
  const { id } = await params;

  const user: User = await fetch(
    "https://dummyjson.com/users/" + id
  ).then(res => res.json());

  return (
    <div className={s.detailContainer}>
      <Flex className={s.description}>
        <Title>
          {user.firstName} {user.lastName}
        </Title>
        <Text>{`Age: ${user.age}`}</Text>
        <Text>{`birthDate: ${user.birthDate}`}</Text>
      </Flex>
    </div>
  );
}
