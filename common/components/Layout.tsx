import { useState } from "react";
import { SidebarDesktop } from "@components/SidebarDesktop";
import { SidebarMobile } from "@components/SidebarMobile";
import { Header } from "@components/Header";
import { useWindowSize } from "@hooks/useWindowSize";

export const Layout: React.FunctionComponent = ({ children }) => {
  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState<boolean>(
    false
  );
  const size = useWindowSize();

  const handleClickHamburher = () => {
    setIsOpenSidebarMobile(!isOpenSidebarMobile);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {size.width <= 768 ? (
        isOpenSidebarMobile && <SidebarMobile />
      ) : (
        <SidebarDesktop />
      )}
      <div className="flex flex-col flex-1 w-full">
        <Header onClickHamburguer={handleClickHamburher} />
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};
