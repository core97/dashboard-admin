import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface IItemDropdown {
  text: string;
  routeHref: string;
}

interface IProps {
  title: string;
  titleIcon: React.ReactNode;
  items: IItemDropdown[];
}

export const SidebarItemDropdown = ({ title, titleIcon, items }: IProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <li className="relative px-6 py-3">
      <button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
        aria-haspopup="true"
      >
        <span className="inline-flex items-center">
          {titleIcon}
          <span className="ml-4">{title}</span>
        </span>
        <RiArrowDropDownLine size="26" />
      </button>

      <div>
        {/* TODO: Animación para abrir dropdown */}
        <ul
          className={`${
            isOpenDropdown
              ? "p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50"
              : "h-0 overflow-hidden"
          } transition-all duration-100`}
          aria-label="submenu"
        >
          {items.map((eachItem) => (
            <li
              className="px-2 py-1 transition-colors duration-150 hover:text-gray-800"
              key={eachItem.text}
            >
              <Link href={eachItem.routeHref}>
                <a className="w-full">{eachItem.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
