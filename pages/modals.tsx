import { useContext } from "react";
import { Button } from "@components/Button";
import { ModalContext } from "@contexts/ModalContext";

export default function Modals(): React.ReactNode {
  const { openModal } = useContext(ModalContext);

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Modals
      </h2>
      <div className="max-w-2xl px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This is possibly
          <strong>the most accessible a modal can get</strong>, using
          JavaScript. When opened, it uses
          <code>assets/js/focus-trap.js</code>
          to create a<em>focus trap</em>, which means that if you use your
          keyboard to navigate around, focus won't leak to the elements behind,
          staying inside the modal in a loop, until you take any action.
        </p>

        <p className="text-gray-600 dark:text-gray-400">
          Also, on small screens it is placed at the bottom of the screen, to
          account for larger devices and make it easier to click the larger
          buttons.
        </p>
      </div>

      <div>
        <Button type="medium" onClick={openModal}>
          Open Modal
        </Button>
      </div>
    </>
  );
}
