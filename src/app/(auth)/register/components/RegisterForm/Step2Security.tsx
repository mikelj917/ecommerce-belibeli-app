import { InputForm } from "@/app/(auth)/_components/InputForm";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RegisterFormData } from "../../schemas/register-schema";

type StepProps = {
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
};

export const Step2Security = ({ register, errors }: StepProps) => {
  return (
    <>
      <InputForm
        label="Senha"
        placeholder="Digite a sua senha"
        name="password"
        register={register}
        errors={errors}
      />
      <InputForm
        label="Confirme a senha"
        placeholder="Confirme a sua senha"
        name="confirmPassword"
        register={register}
        errors={errors}
      />
    </>
  );
};
