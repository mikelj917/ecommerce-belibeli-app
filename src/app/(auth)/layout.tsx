import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-wrapper flex min-h-screen min-w-screen justify-center">{children}</div>
  );
}
