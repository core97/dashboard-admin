interface IProps {
  bigSection?: boolean;
  withTitle?: boolean;
  title?: string;
  secondColor?: boolean;
  content?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = ({
  bigSection,
  withTitle,
  title,
  secondColor,
  content,
  icon,
  children,
}: IProps) => {
  if (bigSection) {
    return (
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
        {children ? (
          children
        ) : (
          <p className="text-sm text-gray-600">{content}</p>
        )}
      </div>
    );
  }

  if (withTitle) {
    return (
      <div
        className={`min-w-0 p-4 ${
          secondColor ? "text-white bg-purple-600" : "text-gray-600 bg-white"
        } rounded-lg shadow-xs`}
      >
        <h4 className="mb-4 font-semibold">{title}</h4>
        <p>{content}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
      <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full">
        {icon}
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-700">{content}</p>
      </div>
    </div>
  );
};
