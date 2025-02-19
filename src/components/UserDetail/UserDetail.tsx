import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import { Avatar, Flex, Group, Text } from "@mantine/core";
import classes from "./UserInfoIcons.module.css";
import { User } from "@/utils/types";

export function UserDetail({ user }: { user: User }) {
  console.log(user);

  return (
    <Flex>
      <button onClick={() => window.history.back()}>Back</button>
      <Flex w={"100%"} direction="column" align="center">
        <Flex direction="column" wrap="nowrap">
          <Avatar src={user.image} size={"50%"} radius="md" />
          <div>
            <Flex direction={"row"} gap={5} align="center">
              <Text fz="xxl" tt="uppercase" fw={700} c="dark">
                {user.firstName}
              </Text>
              <Text fz="lg" tt="uppercase" fw={700} c="dark">
                {user.lastName}
              </Text>
            </Flex>

            <Group wrap="nowrap" gap={10} mt={3}>
              <Text fz="xs" c="dark">
                UserAgent: {user.userAgent}
              </Text>
            </Group>

            <Group wrap="nowrap" gap={10} mt={3}>
              <IconAt stroke={1.5} size={16} className={classes.icon} />
              <Text fz="xs" c="dark">
                robert@glassbreaker.io
              </Text>
            </Group>

            <Group wrap="nowrap" gap={10} mt={5}>
              <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
              <Text fz="xs" c="dark">
                +11 (876) 890 56 23
              </Text>
            </Group>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
