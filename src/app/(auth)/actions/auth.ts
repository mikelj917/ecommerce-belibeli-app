"use server";
import { validateUser } from "@/backend/user";
import type { User } from "@/shared/types/User";
import { deleteToken, getToken, setToken } from "../services/auth";
import { createUser } from "../services/user";

export const registerUser = async (userData: User) => {
  const response = await createUser(userData);
  return response;
};

export const loginUser = async (userData: Pick<User, "email" | "password">) => {
  const userResponse = await validateUser(userData);
  if (typeof userResponse === "string") {
    await setToken(userResponse);
    return { success: true, token: userResponse };
  }
  return { success: false, error: userResponse };
};

export const constlogoutUser = async () => {
  const token = await getToken();
  if (token) {
    await deleteToken();
    return { success: true, message: "Usuário deslogado" };
  }
  return { success: false, message: "Não foi possivel encontrar o usuário para deslogar" };
};
