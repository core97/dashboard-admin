interface IProps {
  textarea?: boolean;
  type?: "email" | "password" | "text" | "number";
  label?: string;
  placeholder?: string;
  name?: string;
  // TODO: Tipar 'errors' y 'register'
  errors?: any;
  register?: any;
}

export const Textfield = ({
  textarea,
  type,
  label,
  placeholder = '',
  name,
  errors,
  register,
}: IProps) => {
  return (
    <div className="mb-5">
      {label && (
        <label className="block text-sm leading-5 font-normal text-gray-700 mb-2">
          {label}
        </label>
      )}
      {!textarea ? (
        <input
          className={`block w-full mt-1 mb-2 bg-white rounded border ${
            errors[name] ? "border-red-500" : "border-gray-300"
          } focus:outline-none ${
            errors[name] ? "focus:border-red-500" : "focus:border-indigo-500"
          } focus:shadow text-base px-4 py-2`}
          placeholder={placeholder}
          type={type}
          name={name}
          ref={register}
        />
      ) : (
        <textarea
          className={`block w-full mt-1 mb-2 bg-white rounded border ${
            errors[name] ? "border-red-500" : "border-gray-300"
          } focus:outline-none h-32 ${
            errors[name] ? "focus:border-red-500" : "focus:border-indigo-500"
          } focus:shadow text-base px-4 py-2 resize-none`}
          placeholder={placeholder}
          name={name}
          ref={register}
        />
      )}
      {register && errors && errors[name] && (
        <span className="text-red-600 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};
