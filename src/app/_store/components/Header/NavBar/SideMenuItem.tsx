import type { JSX } from "react";

type Props = {
  onClick?: () => void;
  className?: string;
  icon: JSX.Element;
  label: string;
};

export const SideMenuItem = ({ onClick, className, icon, label }: Props) => {
  return (
    <div className="flex w-full items-center gap-3 py-3 rounded-md active:bg-black/10">
      {icon}
      <span onClick={onClick} className={`text-base ${className}`}>
        {label}
      </span>
    </div>
  );
};
