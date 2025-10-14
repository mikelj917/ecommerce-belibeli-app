import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-wrapper flex min-w-screen items-center justify-center p-6">
      {children}
    </div>
  );
}
