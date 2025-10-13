import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-wrapper flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
}
