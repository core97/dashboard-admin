import { useState, useContext } from "react";
import { SidebarDesktop } from "@components/SidebarDesktop";
import { SidebarMobile } from "@components/SidebarMobile";
import { Header } from "@components/Header";
import { Modal } from "@components/Modal";
import { useWindowSize } from "@hooks/useWindowSize";
import { ModalContext } from "@contexts/ModalContext";

export const Layout: React.FunctionComponent = ({ children }) => {
  const { isOpenModal } = useContext(ModalContext);
  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState<boolean>(
    false
  );
  const size = useWindowSize();

  const handleClickHamburger = () => {
    setIsOpenSidebarMobile(!isOpenSidebarMobile);
  };

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {size.width <= 768 ? (
          <SidebarMobile isOpenSidebar={isOpenSidebarMobile} closeSidebar={() => setIsOpenSidebarMobile(false)}/>
        ) : (
          <SidebarDesktop />
        )}
        <div className="flex flex-col flex-1 w-full">
          <Header onClickHamburguer={handleClickHamburger} />
          <main className="h-full pb-16 overflow-y-auto">
            <div className="container grid px-6 mx-auto">{children}</div>
          </main>
        </div>
      </div>
      {isOpenModal && <Modal />}
    </>
  );
};
