"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  registerSchema,
  type RegisterFormData,
} from "../../schemas/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Step1Identification } from "./Step1Identification";
import { Step2Security } from "./Step2Security";
import { ChevronLeftIcon, LockClosedIcon } from "@/assets/Icons";
import { OrDivider } from "@/app/(auth)/_components/OrDivider";
import googleGLogo from "@/assets/images/auth-logos/google-G.png";
import Link from "next/link";
import { SocialLoginButton } from "@/app/(auth)/_components/SocialLoginButton";
import { useCreateUser } from "../../hooks/user";
import { generateID } from "@/shared/utils/id/generate-ID";
import { generateToken } from "@/shared/utils/id/generate-token";
import { SucessRegisterModal } from "../SucessRegisterModal/SucessRegisterModal";

export const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate } = useCreateUser();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: {
        password: "",
        confirmPassword: "",
      },
    },
    mode: "onChange",
  });

  const handlePreviousStep = () => setCurrentStep(currentStep - 1);

  const handleNextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let isValid = false;

    if (currentStep === 0) {
      isValid = await trigger(["name", "email"]);
    }

    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    const id = generateID();
    mutate({
      ...data,
      id,
      password: data.password.password,
      token: generateToken(id),
    });

    setIsModalOpen(true);
  };

  const StepFormContent = [
    <Step1Identification key="step1" register={register} errors={errors} />,
    <Step2Security key="step2" register={register} errors={errors} />,
  ];

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div>
        <h1 className="mt-5 text-center text-2xl font-bold">
          Crie a sua conta BeliBeli
        </h1>
        <p className="flex justify-center text-sm text-green-500">
          <LockClosedIcon className="size-5" />
          Seus dados estão protegidos.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        {currentStep === 1 && (
          <button
            onClick={handlePreviousStep}
            className="absolute top-6 left-3 rounded-full border p-1 active:bg-black/20 lg:hidden"
          >
            {<ChevronLeftIcon className="size-7" />}
          </button>
        )}

        {StepFormContent[currentStep]}

        {currentStep === 0 ? (
          <>
            <button
              onClick={handleNextStep}
              className="mx-auto mt-5 w-full max-w-lg cursor-pointer rounded-lg bg-black py-4 font-bold text-white transition-colors hover:bg-black/80 active:bg-black/60"
            >
              Continuar
            </button>

            <p className="text-center text-sm text-black/60">
              Você já possui uma conta?{" "}
              <span className="cursor-pointer font-bold text-black underline active:text-black/70">
                <Link href={"/login"}>Login</Link>
              </span>
            </p>
          </>
        ) : (
          <div className="mx-auto mt-5 flex w-full max-w-lg gap-4">
            <button
              onClick={handlePreviousStep}
              disabled={isSubmitting}
              className="hidden w-full cursor-pointer rounded-lg border border-black bg-white py-4 font-bold text-black transition-colors hover:bg-zinc-100 active:bg-black/20 lg:inline-block"
            >
              Voltar
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-lg bg-black py-4 font-bold text-white transition-colors hover:bg-black/80 active:bg-black/60"
            >
              {isSubmitting ? "Registrando..." : "Registrar"}
            </button>
          </div>
        )}
      </form>

      {currentStep === 0 && (
        <div className="w-full max-w-lg">
          <OrDivider />
          <div className="flex flex-col gap-3">
            <SocialLoginButton
              src={googleGLogo}
              alt="Prosseguir com o Google"
            />
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/80 p-2">
          <SucessRegisterModal />
        </div>
      )}
    </div>
  );
};
