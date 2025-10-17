"use client";
import type { User } from "@/shared/types/User";
import { useRouter } from "next/navigation";
import { loginUser } from "../actions/auth";
import type { ErrorBackend } from "@/backend/types/Error";

export type ResponseType = {
  success: boolean;
  token?: string;
  error?: ErrorBackend;
};

export const useAuth = () => {
  const router = useRouter();

  const handleLogin = async (userData: Pick<User, "email" | "password">) => {
    const response: ResponseType = await loginUser(userData);
    if (!response.success) {
      return response;
    }
    router.push("/");
    return response;
  };

  return { handleLogin };
};
