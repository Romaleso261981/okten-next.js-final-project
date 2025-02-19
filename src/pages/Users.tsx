"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import { Center } from "@mantine/core";
import { User } from "@/utils/types";
import { Container } from "@/components";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import { UsersList } from "@/components/UsersPage/UsersPage";

import s from "./users.module.css";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import getData from "@/helpers/api-service";

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const limit = 10;

  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(
    () => {
      const fetchData = async () => {
        const { data: users, total } = await getData<User[]>({
          url: "/api/users",
          skip: skip,
          limit: limit
        });
        setUsers(users);
        setTotal(total);
      };

      fetchData();
    },
    [skip]
  );

  useEffect(
    () => {
      if (user === null) {
        router.push("/login");
      }
    },
    [user, router]
  );

  if (!users.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-5xl text-orange-400">Loading...</h1>
      </div>
    );
  }

  return (
    <Container>
      <section className={s.wrapper}>
        <h1 className={s.title}>Users</h1>
        {users.length > 0 && <UsersList users={users} />}
        <Center mt={30} mb={50}>
          {total > limit &&
            <PaginationComponent
              total={total}
              setSkip={setSkip}
              limit={limit}
            />}
        </Center>
      </section>
    </Container>
  );
};

export default Users;
