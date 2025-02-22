"use client";

import { Pagination } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function PaginationComponent({ total }: { total: number }) {
  const router = useRouter();

  const handlePageChange = (newSkip: number) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("skip", newSkip.toString());

    router.push(`/users?${newSearchParams.toString()}`);
  };

  return <Pagination total={total} onChange={handlePageChange} />;
}
