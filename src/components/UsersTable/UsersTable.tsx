"use client";

import { IconPencil, IconTrash } from "@tabler/icons-react";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Group,
  Table,
  Text,
  useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { User } from "@/utils/types";
import { useRouter } from "next/navigation";

export function UsersTable({ users }: { users: User[] }) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const router = useRouter();

  const handleUserClick = (id: number | undefined) => {
    router.push(`/users/${id?.toString()}`);
  };

  const rows = users.map(item => (
    <Table.Tr key={item.id}>
      <Table.Td style={{cursor: "pointer"}} onClick={() => handleUserClick(item.id)}>
        <Group gap="sm">
          <Avatar size={30} src={item.image} radius={30} />
          <div>
            <Text fz="sm" fw={500}>
              {item.firstName} {item.lastName}
            </Text>
            {isMobile && (
              <>
                <Text fz="xs">{item.email}</Text>
                <Text fz="xs">{item.phone}</Text>
              </>
            )}
          </div>
        </Group>
      </Table.Td>

      {!isMobile && (
        <>
          <Table.Td>
            <Badge  variant="light">
              {item.age}: year.
            </Badge>
          </Table.Td>
          <Table.Td>
            <Anchor component="button" size="sm">
              {item.email}
            </Anchor>
          </Table.Td>
          <Table.Td>
            <Text fz="sm">{item.phone}</Text>
          </Table.Td>
        </>
      )}

      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon
            variant="subtle"
            color="gray"
          >
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={isMobile ? 400 : 800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Employee</Table.Th>
            {!isMobile && (
              <>
                <Table.Th>Age</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Phone</Table.Th>
              </>
            )}
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
