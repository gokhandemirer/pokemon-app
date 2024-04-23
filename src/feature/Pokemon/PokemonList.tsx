import Table from "@/components/Table";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";
import { Pokemon, PokemonResponse } from "@/types";

const columnHelper = createColumnHelper<Pokemon>();

const columns: ColumnDef<Pokemon, any>[] = [
  columnHelper.accessor("name", {
    header: "Name",
  }),
];

interface PokemonListProps {
  data: PokemonResponse;
  currentPage: number;
  lastPage: number;
  fetchLimit: number;
  setCurrentPage: (page: number) => void;
  onClickRow: (row: Pokemon) => void;
}

export default function PokemonList({
  data,
  currentPage,
  lastPage,
  fetchLimit,
  setCurrentPage,
  onClickRow,
}: PokemonListProps) {
  return (
    <Table
      data={data.results}
      columns={columns}
      totalPage={data.count}
      lastPage={lastPage}
      currentPage={currentPage}
      pageSize={fetchLimit}
      setCurrentPage={setCurrentPage}
      onClickRow={onClickRow}
    />
  );
}
