import type React from "react"

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const IconMobileButton: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`stroke-3 text-black/90 ${className}`}
    >
      {children}
    </button>
  );
}