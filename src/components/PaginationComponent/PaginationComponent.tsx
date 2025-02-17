import { Pagination } from "@mantine/core";

type Props = {
  total: number;
  setSkip: (skip: number) => void;
  limit: number;
};

const PaginationComponent = ({ total, setSkip, limit }: Props) => {
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (page: number) => {
    setSkip((page - 1) * limit);
  };

  return <Pagination total={totalPages} onChange={handlePageChange} />;
};

export default PaginationComponent;
