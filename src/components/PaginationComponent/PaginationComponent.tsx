"use client";

import { Group } from "@mantine/core";
import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";

type PaginationComponentProps = {
  total?: number;
};

export const PaginationComponent: FC<PaginationComponentProps> = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Group>
      <a href={createPageURL(currentPage - 1)}>Prev</a>
      <a href={createPageURL(currentPage + 1)}>Next</a>
    </Group>
  );
};
