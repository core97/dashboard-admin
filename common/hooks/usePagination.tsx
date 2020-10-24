import React, { useState, useEffect } from "react";

export function usePagination(data: any[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<any[]>([]);
  const maxPage: number = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  useEffect(() => {
    if (maxPage <= 7) {
      let arr = [];
      for (let i = 1; i <= maxPage; i++) {
        arr.push(i);
      }
      setPages(arr);
      return;
    }
    if (currentPage <= 4) {
      setPages([1, 2, 3, 4, 5, "...", maxPage]);
    }
    if (currentPage > 4 && currentPage < maxPage - 3) {
      setPages([
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        maxPage,
      ]);
    }
    if (currentPage > maxPage - 4) {
      setPages([
        1,
        "...",
        maxPage - 4,
        maxPage - 3,
        maxPage - 2,
        maxPage - 1,
        maxPage,
      ]);
    }
  }, [currentPage]);

  return { next, prev, jump, currentData, currentPage, pages, maxPage };
}
