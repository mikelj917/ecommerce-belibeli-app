"use client"
import React from "react";
import { useAuth } from "./hooks/auth";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { isInitialized } = useAuth();

  if (!isInitialized) {
    return <div>Carregando App...</div>;
  }

  return (
    <div className="auth-wrapper flex min-h-screen min-w-screen justify-center">{children}</div>
  );
}
