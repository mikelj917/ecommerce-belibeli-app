import { API } from "@/shared/services/API";
import type { LoginRequest, LoginResponse } from "../../types/Auth";

export const loginUser = async (userData: LoginRequest) => {
  const response = await API.post<LoginResponse>("/login", userData);
  return response.data;
};
