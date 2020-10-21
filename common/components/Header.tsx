import { Menu } from "@components/Menu";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiTwotoneAlert } from "react-icons/ai";
import { MdSettings } from "react-icons/md";

interface IProps {
  onClickHamburguer(): void;
}

export const Header = ({ onClickHamburguer }: IProps) => {
  const notificationMenu = {
    mainButton: <AiTwotoneAlert size="24" />,
    submenuItems: [
      {
        routeHref: "/",
        text: "Mensajes",
        counterAlerts: 13,
      },
      {
        routeHref: "/",
        text: "Ventas",
        counterAlerts: 13,
      },
    ],
  };

  const profileMenu = {
    mainButton:
      "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82",
    submenuItems: [
      {
        routeHref: "/",
        text: "Settings",
        icon: <MdSettings />,
      },
    ],
  };

  return (
    <header className="z-10 py-4 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600">
        {/* Hamburguer icon */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={onClickHamburguer}
        >
          <FiMenu size="24" />
        </button>
        {/* Search Input */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <FiSearch size="14" />
            </div>
            {/* TODO: No funciona el border cuando se hace focus */}
            <input
              type="text"
              placeholder="Search for projects"
              aria-label="Search"
              className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 rounded-md focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* Notification menu */}
          <li>
            <Menu
              mainButton={notificationMenu.mainButton}
              submenuItems={notificationMenu.submenuItems}
            />
          </li>
          {/* Profile menu */}
          <li>
            <Menu
              mainButton={profileMenu.mainButton}
              submenuItems={profileMenu.submenuItems}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};
