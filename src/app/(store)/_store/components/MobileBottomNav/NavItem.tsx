import { IconMobileButton } from "@/shared/components/IconMobileButton";
import type { JSX } from "react";

type Props = {
  icon: (isActive: boolean) => JSX.Element;
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const MobileBottomNavItem = ({
  icon,
  label,
  isActive,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-1 flex-col items-center justify-center"
    >
      <IconMobileButton>{icon(isActive)}</IconMobileButton>
      <span className="text-sm font-bold">{label}</span>
    </div>
  );
};
