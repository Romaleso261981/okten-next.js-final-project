import { Container } from "@mantine/core";
import React from "react";

import { User } from "@/utils/types";
import { UserDetail } from "@/components/UserDetail/UserDetail";

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
    <Container>
      <UserDetail user={user} />
    </Container>
  );
}
