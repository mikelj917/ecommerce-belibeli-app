import { InputForm } from "@/app/(auth)/_components/InputForm";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RegisterFormData } from "../../schemas/register-schema";
import { EyeIcon, EyeSlashIcon } from "@/assets/Icons";

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
        icon={<EyeIcon className="size-6" />}
        register={register}
        errors={errors}
      />
      <InputForm
        label="Confirme a senha"
        placeholder="Confirme a sua senha"
        name="confirmPassword"
        icon={<EyeIcon className="size-6" />}
        register={register}
        errors={errors}
      />
    </>
  );
};
