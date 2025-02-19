"use client";

import React, { FC, useContext, useEffect } from "react";
import { Center } from "@mantine/core";
import { User } from "@/utils/types";
import { Container } from "@/components";

import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";

import s from "./users.module.css";

type Props = {
  users: User[];
};

const UsersPage: FC<Props> = ({ users }) => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(
    () => {
      if (user === null) {
        router.push("/login");
      }
    },
    [user, router]
  );

  if (!users.length) return <Loader />;

  return (
    <Container>
      <section className={s.wrapper}>
        <h1 className={s.title}>Users</h1>
        {/* {users.length > 0 && <UsersList users={users} />} */}
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

export default UsersPage;
