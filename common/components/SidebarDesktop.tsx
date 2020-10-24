import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineTable } from 'react-icons/ai';
import { SidebarItem } from "@components/SidebarItem";
import { SidebarItemDropdown } from "@components/SidebarItemDropdown";
import { routes } from "@routes";

const dropdownItems = [
  {
    text: "Login",
    routeHref: "/",
  },
  {
    text: "Register",
    routeHref: "/",
  },
];

export const SidebarDesktop = () => {
  return (
    <aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white md:block">
      <div className="py-4 text-gray-500">
        {/* Sidebar title */}
        <Link href="/">
          <a className="ml-6 text-lg font-bold text-gray-800">Administrator</a>
        </Link>
        {/* Sidebar items */}
        <ul className="mt-6">
          <SidebarItem
            routeHref={routes.home}
            icon={<AiOutlineHome size="20" />}
            text="Dashboard"
          />
          <SidebarItem
            routeHref={routes.forms}
            icon={<FaWpforms size="20" />}
            text="Forms"
          />
          <SidebarItem
            routeHref={routes.cards}
            icon={<BsCardText size="20" />}
            text="Cards"
          />
          <SidebarItem
            routeHref={routes.tables}
            icon={<AiOutlineTable size="20" />}
            text="Tables"
          />
          {/* Dropdown item */}
          <SidebarItemDropdown
            title="Pages"
            titleIcon={<RiPagesLine size="20" />}
            items={dropdownItems}
          />
        </ul>

        {/* Button */}
        <div className="px-6 my-6">
          <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            Create account
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};
