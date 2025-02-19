"use client";

import React, { FC, useEffect, useState } from "react";
import { User } from "@/utils/types";
import { UsersTable } from "@/components/UsersTable/UsersTable";
import { Center, Container, Pagination } from "@mantine/core";
import Loader from "@/components/Loader/Loader";
import { LIMIT } from "@/constans/constans";

const Page: FC = () => {
  const [activePage, setPage] = useState(1);
  const [users, setUsers] = useState<User[] | null>(null);
  const [total, setTotal] = useState<number>(0);

  useEffect(
    () => {
      const fetchUsers = async () => {
        try {
          const res = await fetch(
            `http://localhost:3000/api/users?limit=${LIMIT}&skip=${activePage *
              10}`
          );
          if (!res.ok) throw new Error("Failed to fetch users");

          const data = await res.json();
          setUsers(data.data);
          setTotal(data.total);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUsers();
    },
    [activePage]
  );

  if (!users) return <Loader />;

  return (
    <Container pt={20} pb={80}>
      <UsersTable users={users} />
      <Center mt={20}>
        <Pagination total={total / 10} onChange={setPage} />
      </Center>
    </Container>
  );
};

export default Page;
