import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/loginService";
import type { LoginRequest, LoginResponse } from "../../types/Auth";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  return useMutation<LoginResponse, AxiosError, LoginRequest>({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/");
    },
  });
};
