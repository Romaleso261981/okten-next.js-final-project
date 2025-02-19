// import { Pagination } from "@mantine/core";

// type Props = {
//   total: number;
//   setSkip: (skip: number) => void;
//   limit: number;
// };

// const PaginationComponent = ({ total, setSkip, limit }: Props) => {
//   const totalPages = Math.ceil(total / limit);

//   const handlePageChange = (page: number) => {
//     setSkip((page - 1) * limit);
//   };

//   return <Pagination total={totalPages} onChange={handlePageChange} />;
// };

// export default PaginationComponent;

"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  total: number;
  limit: number;
  skip: number;
}

export default function Pagination({ total, limit, skip }: PaginationProps) {
  const router = useRouter();

  const handlePageChange = (newSkip: number) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("skip", newSkip.toString());
    newSearchParams.set("limit", limit.toString());

    router.push(`/users?${newSearchParams.toString()}`);
  };

  const fethToServer = async () => {
    await fetch(`http://localhost:3000/users/api`);
  };

  return (
    <div>
      <button onClick={fethToServer} disabled={skip === 0}>
        Previous
      </button>
      <button
        onClick={() => handlePageChange(skip + limit)}
        disabled={skip + limit >= total}
      >
        Next
      </button>
    </div>
  );
}
