"use client";
import { useEffect, useState } from "react";
import { getUserToken, loginUser } from "../services/user";
import type { User } from "@/shared/types/User";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getUserToken();
    if (token) {
      setIsAuthenticated(true);
    }
    setIsInitialized(true);
  }, []);

  const handleLogin = async (userData: Pick<User, "email" | "password">) => {
    try {
      await loginUser(userData);
      setIsAuthenticated(true);
      router.push("/");
    } catch (error) {
      throw error;
    }
  };

  return { isAuthenticated, isInitialized, login: handleLogin };
};
