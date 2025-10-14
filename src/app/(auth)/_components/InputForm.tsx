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
    register: UseFormRegister<TFormValues>;
    errors: FieldErrors<TFormValues>;
  };

export const InputForm = <TFormValues extends FieldValues>({
  label,
  name,
  register,
  errors,
  ...rest
}: TypeInputFormProps<TFormValues>) => {
  const errorMessage = errors[name]?.message;
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <label
        htmlFor={name}
        className={`mb-1 font-bold ${errorMessage ? "text-red-500" : "text-black"}`}
      >
        {label}
      </label>
      <input
        {...rest}
        {...register(name)}
        className={`rounded-lg border p-3 outline-0 ${errorMessage ? "border-red-500" : "border-black/30"}`}
      />
      {errorMessage && <p className="text-red-500">{errorMessage as string}</p>}
    </div>
  );
};
