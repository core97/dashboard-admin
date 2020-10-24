import { Table } from "@components/Table";

const columns = ["Client", "Amount", "Status", "Date", "Actions"];
const rows = [
  [
    {
      type: "content",
      title: "Carlitoh",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Not aapproved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Not aapproved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Not approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
  [
    {
      type: "content",
      title: "Hans Burger",
      subtitle: "10x Developer",
    },
    {
      type: "text",
      title: "$ 863.45",
    },
    {
      type: "status",
      title: "Approved",
    },
    {
      type: "text",
      title: "6/10/2020",
    },
    {
      type: "action",
    },
  ],
];

export default function Home(): React.ReactNode {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700">Tables</h2>
      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Table with actions
      </h4>
      <Table columns={columns} rows={rows} />
    </>
  );
}
