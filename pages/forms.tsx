import { SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { Select } from "@components/Select";
import { Textfield } from "@components/Textfield";

type FormExample = {
  email: string;
  message: string;
};

const selectOptions = {
  label: "Viajar en",
  items: [
    {
      option: "Coche",
      isSelected: false,
    },
    {
      option: "Avión",
      isSelected: true,
    },
    {
      option: "Barco",
      isSelected: false,
    },
  ],
};

export default function Forms(): React.ReactNode {
  const { register, handleSubmit, errors } = useForm<FormExample>();

  const onSubmit = (data: FormExample, e: SyntheticEvent) => {
    e.target.reset();
    console.log(data);
  };

  return (
    <>
      <h2 className="mt-6 mb-8 text-2xl font-semibold text-gray-700">
        Formularios
      </h2>
      <h4 className="mb-4 text-lg font-semibold text-gray-600">Elementos</h4>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
        <form className="block" onSubmit={handleSubmit(onSubmit)}>
          <Textfield
            placeholder="Email"
            type="email"
            name="email"
            errors={errors}
            register={register({
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
          />
          <Textfield
            placeholder="Mensaje"
            textarea
            name="message"
            errors={errors}
            register={register({
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
          />
          <Select label={selectOptions.label} options={selectOptions.items} />
        </form>
      </div>
    </>
  );
}
