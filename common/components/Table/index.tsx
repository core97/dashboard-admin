import { useState, useEffect } from "react";
import { TableHeader } from "@components/Table/components/TableHeader";
import { TableFooter } from "@components/Table/components/TableFooter";
import { Row } from "@components/Table/components/Row";
import { Cell } from "@components/Table/components/Cell";
import { usePagination } from "@hooks/usePagination";

interface ICell {
  type: "text" | "status" | "content" | "action";
  title?: string;
  subtitle?: string;
  boldFont?: boolean;
}
// TODO: Tipar 'rows'
interface IProps {
  columns: string[];
  rows: any;
}

export const Table = ({ columns, rows }: IProps) => {
  const [rowsPerPage, setRowsPerPage] = useState<any[]>([]);
  const {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    pages,
    maxPage,
  } = usePagination(rows, 2);

  useEffect(() => {
    setRowsPerPage(currentData());
  }, [currentPage]);

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      {/* Main content of table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <TableHeader columns={columns} />
          <tbody className="bg-white divide-y">
            {rowsPerPage.map((eachRow, index) => {
              return (
                <Row key={index}>
                  {eachRow.map((eachCell: ICell, index: number) => {
                    if (eachCell.type === "content") {
                      return (
                        <Cell
                          type="content"
                          title={eachCell.title}
                          subtitle={eachCell.subtitle}
                          key={index}
                        />
                      );
                    } else if (eachCell.type === "text") {
                      return (
                        <Cell type="text" title={eachCell.title} key={index} />
                      );
                    } else if (eachCell.type === "status") {
                      return (
                        <Cell
                          type="status"
                          title={eachCell.title}
                          key={index}
                        />
                      );
                    } else if (eachCell.type === "action") {
                      return <Cell type="action" key={index} />;
                    }
                  })}
                </Row>
              );
            })}
          </tbody>
        </table>
      </div>
      <TableFooter
        next={next}
        prev={prev}
        jump={jump}
        currentPage={currentPage}
        pages={pages}
        maxPage={maxPage}
        rowsLength={rows.length}
      />
    </div>
  );
};
