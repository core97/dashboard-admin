import Link from "next/link";
import { AiOutlineHome, AiOutlinePieChart } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineTable } from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";
import { BiWindows } from "react-icons/bi";
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

export const SidebarMobile = ({ isOpenSidebar, closeSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`${
          isOpenSidebar
            ? "fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
            : ""
        }transition-all duration-200`}
      ></div>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 z-20 flex-shrink-0 ${
          isOpenSidebar ? "w-64" : "w-0"
        } transition-all duration-200 mt-16 overflow-y-auto bg-white md:hidden`}
      >
        <div className="py-4 text-gray-500">
          <Link href="/">
            <a className="ml-6 text-lg font-bold text-gray-800">
              Administrator
            </a>
          </Link>
          <ul className="mt-6" onClick={closeSidebar}>
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
            <SidebarItem
              routeHref={routes.buttons}
              icon={<HiCursorClick size="20" />}
              text="Buttons"
            />
            <SidebarItem
              routeHref={routes.modals}
              icon={<BiWindows size="20" />}
              text="Modals"
            />
            <SidebarItem
              routeHref={routes.charts}
              icon={<AiOutlinePieChart size="20" />}
              text="Charts"
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
    </>
  );
};
