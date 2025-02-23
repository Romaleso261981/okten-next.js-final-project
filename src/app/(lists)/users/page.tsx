import React from "react";
import { UsersTable } from "@/components/UsersTable/UsersTable";
import { Center, Container } from "@mantine/core";
import Loader from "@/components/Loader/Loader";
import getUsers, { IUsersParams } from "../../../../actions/getUsers";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

interface Props {
  searchParams: Promise<IUsersParams>;
}

const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const data = await getUsers(params);

  const message = data.message ? data.message : "No users found";

  if (data.recipes < 0) return <Loader message={message} />;

  return (
    <Container pt={20} pb={80}>
      <UsersTable users={data.users} />
      <Center mt={20}>
        <PaginationComponent total={data.total / 10} />
      </Center>
    </Container>
  );
};

export default Page;
