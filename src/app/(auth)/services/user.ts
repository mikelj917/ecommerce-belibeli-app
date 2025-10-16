import { validateUser } from "@/backend/user";
import { jsonServerAPI } from "@/shared/services/jsonServerAPI";
import type { User } from "@/shared/types/User";

export const getUsers = async () => {
  const response = await jsonServerAPI.get("/users");
  return response.data;
};

export const createUser = async (userData: User) => {
  const response = await jsonServerAPI.post("/users", userData);
  return response.data;
};

export const loginUser = async (userData: Pick<User, "email" | "password">) => {
  const { email, password } = userData;
  const userResponse = await validateUser({
    email,
    password,
  });
  if (typeof userResponse === "string") {
    localStorage.setItem("USER_TOKEN", userResponse);
    return userResponse;
  }
  return userResponse;
};
