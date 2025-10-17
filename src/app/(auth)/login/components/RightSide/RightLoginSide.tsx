"use client";
import { useAuth } from "@/app/(auth)/hooks/auth";
import { LoginForm } from "./LoginForm/LoginForm";
import type { loginFormData } from "../../schemas/login-schema";

export const RightLoginSide = () => {
  const { handleLogin } = useAuth();

  const login = async (userData: loginFormData) => {
    const response = await handleLogin(userData);
    return response;
  };

  return (
    <div className="flex h-full flex-1 flex-col items-center lg:justify-center">
      <LoginForm login={login} />
    </div>
  );
};
