import { Edit } from "@icons/Edit";
import { Remove } from "@icons/Remove";

interface IProps {
  type: "text" | "status" | "content" | "action";
  title?: string;
  subtitle?: string;
  boldFont?: boolean;
}

export const Cell = ({ type, title, subtitle, boldFont }: IProps) => {
  if (type === "text") {
    return (
      <td className="px-4 py-3">
        <span
          className={`${boldFont ? "font-semibold" : "font-normal"}  text-sm`}
        >
          {title}
        </span>
      </td>
    );
  }

  if (type === "status") {
    // TODO: crear un enum para los tipos de estado y poder asi cambiar el color
    return (
      <td className="px-4 py-3 text-sm">
        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
          {title}
        </span>
      </td>
    );
  }

  if (type === "content") {
    return (
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-xs text-gray-600">{subtitle}</p>
          </div>
        </div>
      </td>
    );
  }

  if (type === "action") {
    return (
      <td className="px-4 py-3">
        <div className="flex items-center space-x-4 text-sm">
          <button
            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Edit"
          >
            <Edit />
          </button>
          <button
            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
            aria-label="Delete"
          >
            <Remove />
          </button>
        </div>
      </td>
    );
  }
};
