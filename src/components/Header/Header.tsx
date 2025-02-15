"use client";

import { Flex, Group, Title } from "@mantine/core";

import s from "./Header.module.css";
import { useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import Link from "next/link";
import { UserInfo } from "../UserInfo/UserInfo";

const links = [
  { id: 1, link: "/recipes", label: "Recipes" },
  { id: 2, link: "/", label: "Home" },
  { id: 3, link: "/users", label: "Users" }
];

export const Header = () => {
  const { isLoggedIn } = useContext(UserContext);

  const items = links.map(link =>
    <li key={link.id} className={s.itemItem}>
      <a href={link.link} className={s.itemLink}>
        {link.label}
      </a>
    </li>
  );

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Group>
          <Title>Dummyjson.com</Title>
        </Group>
        {isLoggedIn &&
          <nav className={s.navigation}>
            {items}
          </nav>}
        <Flex gap={40}>
          {isLoggedIn
            ? <UserInfo />
            : <Link href="/login" className={s.itemLink}>
                Login
              </Link>}
          {/* <Search /> */}
          {/* {mounted === true ? <ColorSwitch /> : null} */}
          {/* <UserButton /> */}
        </Flex>
      </div>
    </header>
  );
};
