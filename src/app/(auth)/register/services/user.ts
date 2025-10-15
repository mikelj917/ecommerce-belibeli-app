import { jsonServerAPI } from "@/shared/services/jsonServerAPI";
import type { User } from "@/shared/types/User";

export const createUser = async (userData: User) => {
  const response = await jsonServerAPI.post("/users", userData);
  return response.data;
};
