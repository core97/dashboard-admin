import { AiOutlineEdit } from "react-icons/ai";
import { Button } from "@components/Button";

export default function Buttons(): React.ReactNode {
  return (
    <>
      <div className="container grid px-6 mx-auto">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">Buttons</h2>
        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Sizes
        </h4>
        <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
          <Button type="extraBig">Extra Big</Button>
          <Button type="big">Big</Button>
          <Button type="medium" secondary>
            Medium
          </Button>
          <Button type="medium" disabled>
            Disabled
          </Button>
          <Button type="small">Small</Button>
          <p className="mb-8 text-gray-700 dark:text-gray-400">
            Apply
            <code>w-full</code>
            to any button to create a block level button.
          </p>
          <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Icons
          </h4>
          <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
            <Button type="iconRight" icon={<AiOutlineEdit size="20" />}>
              Icon Right
            </Button>
            <Button type="iconLeft" icon={<AiOutlineEdit size="20" />}>
              Icon Left
            </Button>
            <Button type="iconSquare" icon={<AiOutlineEdit size="20" />} />
            <Button type="iconCircle" icon={<AiOutlineEdit size="20" />} />
          </div>
        </div>
      </div>
    </>
  );
}
