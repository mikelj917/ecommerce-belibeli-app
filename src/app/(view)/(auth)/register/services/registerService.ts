import { API } from "@/shared/services/API";
import type { RegisterResponse, RegisterRequest } from "../../types/Auth";

export const registerUser = async (userData: RegisterRequest) => {
  const response = await API.post<RegisterResponse>("/register", userData);
  return response.data;
};
