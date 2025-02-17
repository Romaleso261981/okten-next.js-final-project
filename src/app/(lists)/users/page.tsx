"use client";

import React, { FC, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Center } from "@mantine/core";
import { User } from "@/utils/types";
import { Container } from "@/components";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import { UsersList } from "@/components/UsersList/UsersList";

import s from "./users.module.css";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

type ReturnFetchData = {
  users: User[];
  total: number;
};

const getData = async ({
  skip,
  limit
}: {
  skip: number;
  limit: number;
}): Promise<ReturnFetchData> => {
  try {
    // const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const token = Cookies.get("authToken"); // Отримання токена з кукі
    const allUsersResponse = await fetch(
      `https://dummyjson.com/auth/users?limit=${limit}&skip=${skip}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      }
    );

    if (!allUsersResponse.ok) {
      throw new Error(
        "Failed to fetch data message:" + allUsersResponse.statusText
      );
    }

    const { users, total } = await allUsersResponse.json();

    return { users, total };
  } catch (error) {
    console.error("Error fetching data", error);
    return { users: [], total: 0 };
  }
};

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
        const { users, total } = await getData({ skip, limit });
        setUsers(users);
        setTotal(total);
      };

      fetchData();
    },
    [skip]
  );

  console.log("user", user);

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
