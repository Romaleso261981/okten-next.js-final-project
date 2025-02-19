"use client";

import { Flex, Title } from "@mantine/core";

import s from "./Header.module.css";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import { UserInfo } from "../UserInfo/UserInfo";
import { LogIn } from "lucide-react";

const links = [
  { id: 1, link: "/recipes", label: "Recipes" },
  { id: 2, link: "/", label: "Home" },
  { id: 3, link: "/users", label: "Users" }
];

export const Header = () => {
  const items = links.map(link =>
    <li key={link.id} className={s.itemItem}>
      <a href={link.link} className={s.itemLink}>
        {link.label}
      </a>
    </li>
  );

  const { user } = useContext(UserContext);

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Link href="/">
          <Title>Dummyjson.com</Title>
        </Link>
        {user &&
          <nav className={s.navigation}>
            {items}
          </nav>}
        <Flex gap={40}>
          {user
            ? <UserInfo user={user} />
            : <Link href="/login" className={s.itemLink}>
                <LogIn />
              </Link>}
          {/* <Search /> */}
          {/* {mounted === true ? <ColorSwitch /> : null} */}
          {/* <UserButton /> */}
        </Flex>
      </div>
    </header>
  );
};
