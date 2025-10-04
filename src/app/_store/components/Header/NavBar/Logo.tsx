import { Logo } from "@/shared/components/Logo";

export const HeaderLogo = () => {
  return (
    <div className="flex cursor-pointer items-center font-bold">
      <Logo />
      <h1 className="font-gravitas hidden text-xl lg:inline-block">BeliBeli.com</h1>
    </div>
  );
};
