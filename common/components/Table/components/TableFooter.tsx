import { Pagination } from "@components/Table/components/Pagination";

interface IProps {
  next(): void;
  prev(): void;
  jump(page: number): void;
  currentPage: number;
  pages: any[];
  maxPage: number;
  rowsLength: number
}

export const TableFooter = ({
  next,
  prev,
  jump,
  currentPage,
  pages,
  maxPage,
  rowsLength
}: IProps) => {
  return (
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9">
      <span className="flex items-center col-span-3">{`Total pedidos ${rowsLength}`}</span>
      <span className="col-span-2"></span>
      <Pagination
        next={next}
        prev={prev}
        jump={jump}
        currentPage={currentPage}
        pages={pages}
        maxPage={maxPage}
      />
    </div>
  );
};
