import { route } from "next/dist/next-server/server/router";
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  text: string;
  routeHref: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({ text, routeHref, icon }: IProps) => {
  const router = useRouter();

  return (
    <li
      className={`relative px-6 py-3 ${
        routeHref === router.pathname ? "border-l-4 border-purple-600" : ""
      }`}
    >
      <Link href={routeHref}>
        <a
          className={`inline-flex items-center w-full text-sm ${
            routeHref === router.pathname ? "text-black" : ""
          } font-semibold transition-colors duration-150 hover:text-gray-800`}
        >
          {icon}
          <span className="ml-4">{text}</span>
        </a>
      </Link>
    </li>
  );
};
