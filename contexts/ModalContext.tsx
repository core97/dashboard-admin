import { useState, createContext } from "react";

type ContextProps = {
  isOpenModal: boolean;
  openModal(): void;
  closeModal(): void;
};

export const ModalContext = createContext<ContextProps | undefined>(undefined);

export function ModalProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <ModalContext.Provider value={{ isOpenModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
