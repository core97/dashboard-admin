import { usePagination } from "@hooks/usePagination";
import { Next as NextIcon } from "@icons/Next";
import { Previous as PreviousIcon } from "@icons/Previous";

interface IProps {
  next(): void;
  prev(): void;
  jump(page: number): void;
  currentPage: number;
  pages: any[];
  maxPage: number;
}

export const Pagination = ({
  next,
  prev,
  jump,
  currentPage,
  pages,
  maxPage,
}: IProps) => {
  return (
    <>
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">
            {/* Previous button */}
            <li>
              <button
                disabled={currentPage === 1 ? true : false}
                className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Previous"
                onClick={prev}
              >
                <PreviousIcon />
              </button>
            </li>
            {pages.map((eachPage) => (
              <li key={eachPage}>
                {typeof eachPage !== "number" ? (
                  <span className="px-3 py-1">{eachPage}</span>
                ) : (
                  <button
                    onClick={() => jump(eachPage)}
                    className={`px-3 py-1 ${
                      currentPage === eachPage
                        ? "text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                        : "rounded-md focus:outline-none focus:shadow-outline-purple"
                    }`}
                  >
                    {eachPage}
                  </button>
                )}
              </li>
            ))}
            {/* Next button */}
            <li>
              <button
                disabled={maxPage === currentPage ? true : false}
                className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Next"
                onClick={next}
              >
                <NextIcon />
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </>
  );
};
