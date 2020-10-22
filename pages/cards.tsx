import { FiUsers } from "react-icons/fi";
import { Card } from "@components/Card";

export default function Cards(): React.ReactNode {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700">Cards</h2>
      {/* Big section cards */}
      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Big section cards
      </h4>
      <Card bigSection content="Large, full width sections goes here" />
      {/* Responsive cards */}
      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Responsive cards
      </h4>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Total clients" content="6389" icon={<FiUsers />} />
        <Card title="Total clients" content="6389" icon={<FiUsers />} />
        <Card title="Total clients" content="6389" icon={<FiUsers />} />
        <Card title="Total clients" content="6389" icon={<FiUsers />} />
      </div>
      {/* Cards with title */}
      <h4 className="mb-4 text-lg font-semibold text-gray-600">
        Cards with title
      </h4>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card
          withTitle
          title="Revenue"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
            commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at
            qui cum numquam, sed amet ratione! Ratione, nihil dolorum."
        />
        <Card
          withTitle
          secondColor
          title="Colored card"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum
            commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at
            qui cum numquam, sed amet ratione! Ratione, nihil dolorum."
        />
      </div>
    </>
  );
}
