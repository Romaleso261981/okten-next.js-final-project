"use client";

import { Pagination } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaginationComponent({ total }: { total: number }) {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handlePageChange = (newSkip: number) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("skip", newSkip.toString());

    router.push(`${currentPath}?${newSearchParams.toString()}`);
  };

  return <Pagination total={total} onChange={handlePageChange} />;
}
