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
  icon?: React.ReactNode;
  onClick?(): void;
  children?: React.ReactNode;
}

export const Button = ({ type, disabled, icon, onClick, children }: IProps) => {
  if (type === "extraBig")
    return (
      <div>
        <button
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`px-10 py-4 font-medium leading-5 text-white transition-colors duration-150 ${
            disabled
              ? "bg-purple-800 cursor-default"
              : "bg-purple-600 hover:bg-purple-700"
          } border border-transparent rounded-lg active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
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
            disabled
              ? "bg-purple-800 cursor-default"
              : "bg-purple-600 hover:bg-purple-700"
          } border border-transparent rounded-lg active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
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
            disabled
              ? "bg-purple-800 cursor-default"
              : "bg-purple-600 hover:bg-purple-700"
          } border border-transparent rounded-lg active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
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
            disabled
              ? "bg-purple-800 cursor-default"
              : "bg-purple-600 hover:bg-purple-700"
          } border border-transparent rounded-md active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
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
            disabled
              ? "bg-purple-800 cursor-default"
              : "bg-purple-600 hover:bg-purple-700"
          } border border-transparent rounded-lg active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
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
            disabled
              ? "bg-purple-800 cursor-default"
              : "bg-purple-600 hover:bg-purple-700"
          } border border-transparent rounded-lg active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
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
            disabled
              ? "bg-purple-800 cursor-default"
              : "bg-purple-600 hover:bg-purple-700"
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
            disabled
              ? "bg-purple-800 cursor-default"
              : "bg-purple-600 hover:bg-purple-700"
          } border border-transparent rounded-full active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
          aria-label="Edit"
        >
          <div className="m-1">{icon}</div>
        </button>
      </div>
    );
};
