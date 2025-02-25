"use client";

import { UnstyledButton, Group, Avatar, Text, Flex } from "@mantine/core";
import classes from "./userInfo.module.css";
import { FC, useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import { UserRespons } from "@/utils/types";
import { LogOut } from "lucide-react";

type props = {
  user: UserRespons;
};
export const UserInfo: FC<props> = ({ user }) => {
  const { logout } = useContext(UserContext);

  return (
    <div className={classes.userWrapper}>
      <UnstyledButton className={classes.userButton}>
        <Group>
          <Avatar src={user.image} radius="xl" />

          <Flex direction="column" style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {user.firstName}
            </Text>
          </Flex>
          <LogOut onClick={logout} />
        </Group>
      </UnstyledButton>
    </div>
  );
};
