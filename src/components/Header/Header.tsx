import s from "./Header.module.css";
import { Flex, Group, Title } from "@mantine/core";

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

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Group>
          <Title>Dummyjson.com</Title>
        </Group>
        <nav className={s.navigation}>
          {items}
        </nav>
        <Flex gap={40}>
          {/* <Search /> */}
          {/* {mounted === true ? <ColorSwitch /> : null} */}
          {/* <UserButton /> */}
        </Flex>
      </div>
    </header>
  );
};
