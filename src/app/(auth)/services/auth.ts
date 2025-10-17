"use server";
import { cookies } from "next/headers";

const TOKEN_KEY = "USER_TOKEN";

export const setToken = async (token: string) => (await cookies()).set(TOKEN_KEY, token);
export const deleteToken = async () => (await cookies()).delete(TOKEN_KEY);
export const getToken = async () => (await cookies()).get(TOKEN_KEY)?.value || null;
