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
import Image from "next/image";

export const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isloadingNextStep, setIsLoadingNextStep] = useState(false);

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
      password: "",
      confirmPassword: "",
    },
  });

  const handleNextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let isValid = false;

    if (currentStep === 0) {
      isValid = await trigger(["name", "email"]);
    }

    if (isValid) {
      setIsLoadingNextStep(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsLoadingNextStep(false);
      }, 1000);
    }
  };

  const handlePreviousStep = () => setCurrentStep(currentStep - 1);

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    console.log("Dados Validados (prontos para enviar à API):", data);
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
              disabled={isloadingNextStep}
              className="mx-auto mt-5 w-full max-w-lg cursor-pointer rounded-lg bg-black py-4 font-bold text-white transition-colors hover:bg-black/80 active:bg-black/60"
            >
              {isloadingNextStep ? (
                <div className="mx-auto h-6 w-6 animate-spin rounded-full border-3 border-t-white/20 border-r-white/20 border-b-white border-l-white/20"></div>
              ) : (
                "Continuar"
              )}
            </button>
            <p className="text-center text-sm text-black/60">
              Você já possui uma conta?{" "}
              <span className="cursor-pointer font-bold text-black underline active:text-black/70">
                Login
              </span>
            </p>
          </>
        ) : (
          <div className="mx-auto mt-5 flex w-full max-w-lg gap-4">
            <button
              onClick={handlePreviousStep}
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-lg border border-black bg-white py-4 font-bold text-black transition-colors hover:bg-zinc-100 active:bg-black/20"
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
            <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-black/30 py-2 transition-colors hover:bg-zinc-100 active:bg-black/10">
              <span className="flex items-center justify-center rounded-full bg-zinc-100 p-1">
                <Image
                  src={googleGLogo}
                  alt="Entre com o google"
                  className="h-6 w-6"
                />
              </span>
              <span>Prosseguir com o Google</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
