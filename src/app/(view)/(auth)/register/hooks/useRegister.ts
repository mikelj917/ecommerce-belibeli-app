import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/registerService";
import type { AxiosError } from "axios";
import type { RegisterResponse, RegisterRequest } from "../../types/Auth";

export const useRegister = () => {
  return useMutation<RegisterResponse, AxiosError, RegisterRequest>({
    mutationFn: registerUser,
  });
};
