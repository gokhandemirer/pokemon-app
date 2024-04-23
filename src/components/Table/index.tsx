import { Pokemon } from "@/types";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  totalPage: number;
  lastPage: number;
  currentPage: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
  onClickRow: (row: Pokemon) => void;
}

const Table = <T extends object>({
  data,
  columns,
  totalPage,
  lastPage,
  currentPage,
  pageSize,
  setCurrentPage,
  onClickRow,
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageIndex = currentPage - 1;

  const pageRangeStart = pageIndex * pageSize + 1;
  const pageRangeEnd =
    (pageIndex + 1) * pageSize < totalPage
      ? (pageIndex + 1) * pageSize
      : totalPage;

  const pageRange = `${pageRangeStart}-${pageRangeEnd}`;

  return (
    <>
      <div className="mb-4 overflow-x-auto p-2 py-4">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      scope="col"
                      className="border-b border-gray-200  px-5 py-3 text-left text-sm text-gray-800"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="odd:bg-white even:bg-gray-50"
                  onClick={() => {
                    onClickRow(row.original as Pokemon);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="border-b border-gray-200  p-5 text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col items-center gap-2 pl-4 pt-2 md:flex-row">
            <div className="flex items-center gap-2 pl-4 pt-2">
              <button
                className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                {"<<"}
              </button>
              <button
                className="ml-0 block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="block rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === lastPage}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => setCurrentPage(lastPage)}
                disabled={currentPage === lastPage}
              >
                {">>"}
              </button>
            </div>

            <div className="flex flex-col items-center gap-2 pl-4 pt-2 sm:flex-row">
              <div className="flex flex-row">
                <span className="flex items-center gap-1">
                  <div>Page</div>
                  <strong>
                    {currentPage} of {lastPage}
                  </strong>
                </span>
              </div>
            </div>
          </div>

          <p className="flex items-center justify-between pl-7 pt-2 pb-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {pageRange}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {totalPage}
              </span>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Table;
