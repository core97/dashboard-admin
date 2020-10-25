import { useContext } from "react";
import { Button } from "@components/Button";
import { Close as CloseIcon } from "@icons/Close";
import { ModalContext } from "@contexts/ModalContext";

export const Modal = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    /* Modal backdrop */
    <div
      onClick={closeModal}
      className="fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
    >
      {/* Modal */}
      <div className="w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl">
        <header className="flex justify-end">
          <button
            onClick={closeModal}
            className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded hover: hover:text-gray-700"
            aria-label="close"
          >
            <CloseIcon />
          </button>
        </header>
        {/* Modal body */}
        <div className="mt-4 mb-6">
          {/* Modal title */}
          <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Modal header
          </p>
          {/* Modal description */}
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
            eligendi repudiandae voluptatem tempore! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum et eligendi repudiandae
            voluptatem tempore! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum et eligendi repudiandae voluptatem
            tempore! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum et eligendi repudiandae voluptatem tempore! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Nostrum et eligendi
            repudiandae voluptatem tempore! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum et eligendi repudiandae
            voluptatem tempore!
          </p>
        </div>
        <footer className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800">
          <Button type="medium" secondary onClick={closeModal}>
            Cancel
          </Button>
          <Button type="medium">Accept</Button>
        </footer>
      </div>
    </div>
  );
};
