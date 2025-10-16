import { validateUser } from "@/backend/user";
import { jsonServerAPI } from "@/shared/services/jsonServerAPI";
import type { User } from "@/shared/types/User";

const TOKEN_KEY = "USER_TOKEN";

export const getUsers = async () => {
  const response = await jsonServerAPI.get("/users");
  return response.data;
};

export const createUser = async (userData: User) => {
  const response = await jsonServerAPI.post("/users", userData);
  return response.data;
};

export const loginUser = async (userData: Pick<User, "email" | "password">) => {
  const userResponse = await validateUser(userData);
  if (typeof userResponse === "string") {
    localStorage.setItem(TOKEN_KEY, userResponse);
    return userResponse;
  }
  return userResponse;
};

export const getUserToken = (): string | null => {
  const userToken = localStorage.getItem(TOKEN_KEY);
  return userToken;
};

export const checkAuthStatus = (): boolean => {
  const userToken = getUserToken();
  return !!userToken;
};
