"use client";
import { ArrowLeftIcon, MenuIcon } from "@/assets/Icons";
import { IconMobileButton } from "@/shared/components/IconMobileButton";
import { useRouter } from "next/navigation";

export const CartHeader = () => {
  const { back } = useRouter();

  return (
    <div className="flex justify-between">
      <IconMobileButton onClick={() => back()}>
        <ArrowLeftIcon className="size-7" />
      </IconMobileButton>
      <h1 className="text-lg font-bold">Seu Carrinho</h1>
      <IconMobileButton>
        <MenuIcon className="size-7" />
      </IconMobileButton>
    </div>
  );
};
