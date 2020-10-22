interface IProps {
  textarea?: boolean;
  type?: "email" | "password" | "text";
  placeholder?: string;
  name?: string;
  // TODO: Tipar 'errors' y 'register'
  errors?: any;
  register?: any;
}

export const Textfield = ({
  textarea,
  type,
  placeholder,
  name,
  errors,
  register,
}: IProps) => {
  return (
    <div className='mb-5'>
      {!textarea ? (
        <input
          className="block w-full mt-1 mb-2 bg-white rounded border border-gray-300 focus:outline-none focus:border-indigo-500 focus:shadow text-base px-4 py-2"
          placeholder={placeholder}
          type={type}
          name={name}
          ref={register}
        />
      ) : (
        <textarea
          className="block w-full mt-1 mb-2 bg-white rounded border border-gray-300 focus:outline-none h-32 focus:border-indigo-500 focus:shadow text-base px-4 py-2 resize-none"
          placeholder={placeholder}
          name={name}
          ref={register}
        />
      )}
      {(register && (errors && errors[name])) && (
        <span className="text-red-600 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};
