import { Cell } from "@components/Table/components/Cell";

interface IProps {
  children?: React.ReactNode;
}

export const Row = ({ children }: IProps) => {
  return <tr className="text-gray-700">{children}</tr>;
};
