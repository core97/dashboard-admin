interface IProps {
  columns: string[];
}

export const TableHeader = ({ columns }: IProps) => {
  return (
    <thead>
      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
        {columns.map((eachColumn: string) => (
          <th key={eachColumn} className="px-4 py-3">
            {eachColumn}
          </th>
        ))}
      </tr>
    </thead>
  );
};
