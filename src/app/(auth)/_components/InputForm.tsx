import type { ComponentProps } from "react";
import type {
  FieldErrors,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

type TypeInputFormProps<TFormValues extends FieldValues> =
  ComponentProps<"input"> & {
    label: string;
    name: FieldPath<TFormValues>;
    icon?: React.ReactNode;
    register: UseFormRegister<TFormValues>;
    errors: FieldErrors<TFormValues>;
  };

export const InputForm = <TFormValues extends FieldValues>({
  label,
  name,
  icon,
  register,
  errors,
  ...rest
}: TypeInputFormProps<TFormValues>) => {
  const errorMessage = errors[name]?.message;
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col justify-center">
      <label
        htmlFor={name}
        className={`mb-1 font-bold ${errorMessage ? "text-red-500" : "text-black"}`}
      >
        {label}
      </label>
      <div className="relative flex w-full items-center">
        <input
          {...rest}
          {...register(name)}
          className={`w-full rounded-lg border outline-0 ${icon ? "py-3 pr-12 pl-3" : "p-3"} ${errorMessage ? "border-red-500" : "border-black/30"}`}
        />
        {icon && <div className="absolute right-3 text-gray-500">{icon}</div>}
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage as string}</p>}
    </div>
  );
};
