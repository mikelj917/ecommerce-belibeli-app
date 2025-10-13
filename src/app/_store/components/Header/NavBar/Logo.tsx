import { Logo } from "@/assets/logo/BeliLogoNoBg";

export const HeaderLogo = () => {
  return (
    <div className="flex gap-1 cursor-pointer items-center font-bold">
      <Logo />
      <h1 className="font-kotta text-3xl lg:inline-block">BeliBeli.com</h1>
    </div>
  );
};
