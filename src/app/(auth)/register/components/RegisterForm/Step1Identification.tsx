import { InputForm } from "@/app/(auth)/_components/InputForm";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RegisterFormData } from "../../schemas/register-schema";

type StepProps = {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
};

export const Step1Identification = ({ register, errors }: StepProps) => {
  return (
    <>
      <InputForm
        label="Nome"
        placeholder="Digite o seu nome"
        name="name"
        register={register}
        errors={errors}
      />
      <InputForm
        label="Email"
        placeholder="Example99@gmail.com"
        name="email"
        register={register}
        errors={errors}
      />
    </>
  );
};
