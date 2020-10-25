interface IProps {
  type:
    | "extraBig"
    | "big"
    | "medium"
    | "small"
    | "iconRight"
    | "iconLeft"
    | "iconSquare"
    | "iconCircle";
  disabled?: boolean;
  secondary?: boolean;
  icon?: React.ReactNode;
  onClick?(): void;
  children?: React.ReactNode;
}

export const Button = ({
  type,
  disabled,
  secondary,
  icon,
  onClick,
  children,
}: IProps) => {
  if (type === "extraBig")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`px-10 py-4 font-medium leading-5 transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-gray-700 border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-purple-600 hover:bg-purple-700  text-white active:bg-purple-600 focus:shadow-outline-purple"
          }  border rounded-lg  focus:outline-none`}
        >
          {children}
        </button>
      </div>
    );

  if (type === "big")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-gray-700 border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-purple-600 hover:bg-purple-700  text-white active:bg-purple-600 focus:shadow-outline-purple"
          } border rounded-lg  focus:outline-none`}
        >
          {children}
        </button>
      </div>
    );

  if (type === "medium")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-gray-700 border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-purple-600 hover:bg-purple-700  text-white active:bg-purple-600 focus:shadow-outline-purple"
          } border rounded-lg  focus:outline-none`}
        >
          {children}
        </button>
      </div>
    );

  if (type === "small")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-gray-700 border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-purple-600 hover:bg-purple-700  text-white active:bg-purple-600 focus:shadow-outline-purple"
          } border rounded-lg  focus:outline-none`}
        >
          {children}
        </button>
      </div>
    );

  if (type === "iconRight")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-gray-700 border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-purple-600 hover:bg-purple-700  text-white active:bg-purple-600 focus:shadow-outline-purple"
          } border rounded-lg  focus:outline-none`}
        >
          <span>{children}</span>
          <div className="ml-4">{icon}</div>
        </button>
      </div>
    );

  if (type === "iconLeft")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-gray-700 border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-purple-600 hover:bg-purple-700  text-white active:bg-purple-600 focus:shadow-outline-purple"
          } border rounded-lg  focus:outline-none`}
        >
          <div className="mr-4">{icon}</div>
          <span>{children}</span>
        </button>
      </div>
    );

  if (type === "iconSquare")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-gray-700 border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-purple-600 hover:bg-purple-700  text-white active:bg-purple-600 focus:shadow-outline-purple"
          } border border-transparent rounded-lg active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
          aria-label="Like"
        >
          <div className="m-1">{icon}</div>
        </button>
      </div>
    );

  if (type === "iconCircle")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ${
            disabled ? "cursor-default" : ""
          } ${
            secondary
              ? "bg-white text-gray-700 border-gray-300 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500"
              : "bg-purple-600 hover:bg-purple-700  text-white active:bg-purple-600 focus:shadow-outline-purple"
          } rounded-full border  focus:outline-none`}
          aria-label="Edit"
        >
          <div className="m-1">{icon}</div>
        </button>
      </div>
    );
};
