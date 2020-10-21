import Link from "next/link";
import { useState } from 'react';

interface ISubmenuItem {
  routeHref: string;
  text: string;
  counterAlerts?: number;
  icon?: React.ReactNode;
}

interface IProps {
  // Si es string debe ser el src de una imagen
  // Si es React.ReactNode debe ser un icono de 'react-icons'
  mainButton: string | React.ReactNode;
  onClickMainButton?(): void;
  submenuItems?: ISubmenuItem[];
}

export const Menu = ({ mainButton, onClickMainButton, submenuItems }: IProps) => {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

  const handleClickMainButton = () => {
    if(!onClickMainButton) {
      setIsOpenSubmenu(!isOpenSubmenu);
    } else {
      onClickMainButton();
    }
  }

  return (
    <div className="relative">
      <button
        className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
        aria-label="Account"
        aria-haspopup="true"
        onClick={handleClickMainButton}
      >
        {typeof mainButton === "string" ? (
          <img
            className="object-cover w-8 h-8 rounded-full"
            src={mainButton}
            alt="menu image"
            aria-hidden="true"
          />
        ) : (
          mainButton
        )}
      </button>
      {(submenuItems && isOpenSubmenu) && (
        <div>
          <ul
            className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md"
            aria-label="submenu"
          >
            {submenuItems.map((item: ISubmenuItem) => (
              <li className="flex" key={item.text}>
                <Link href={item.routeHref}>
                  {item.icon ? (
                    <a className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800">
                      <div className="mr-3">{item.icon}</div>
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <a className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800">
                      <span>{item.text}</span>
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full">
                        {item.counterAlerts}
                      </span>
                    </a>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
