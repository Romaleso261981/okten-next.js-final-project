"use client";

import { UnstyledButton, Group, Avatar, Text, Flex } from "@mantine/core";
import classes from "./userInfo.module.css";
import { useContext } from "react";
import { UserContext } from "@/contexts/userContext";

export const UserInfo = () => {
  const { logout, user } = useContext(UserContext);

  console.log(user);

  return (
    <div className={classes.userWrapper}>
      <UnstyledButton className={classes.userButton}>
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            radius="xl"
          />

          <Flex direction="column" style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              Harriette Spoonlicker
            </Text>

            <Text c="dimmed" size="xs">
              hspoonlicker@outlook.com
            </Text>
          </Flex>
        </Group>
      </UnstyledButton>
      <button onClick={logout} className={classes.logOut}>
        LogOut
      </button>
    </div>
  );
};
