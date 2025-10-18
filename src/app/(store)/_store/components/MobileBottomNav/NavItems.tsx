import { ShoppingCartIcon, CategoryIcon, HomeIcon, ProfileIcon } from "@/assets/Icons";

export const bottomNavItems = [
  {
    label: "Home",
    icon: (isActive: boolean) => (
      <HomeIcon
        className={`size-7 ${isActive ? "fill-current stroke-none" : "fill-none stroke-current"}`}
      />
    ),
  },
  {
    label: "Categorias",
    icon: (isActive: boolean) => (
      <CategoryIcon
        className={`size-7 ${isActive ? "fill-current stroke-none" : "fill-none stroke-current"}`}
      />
    ),
  },
  {
    label: "Carrinho",
    icon: (isActive: boolean) => (
      <ShoppingCartIcon
        className={`size-7 ${isActive ? "fill-current stroke-none" : "fill-none stroke-current"}`}
      />
    ),
  },
  {
    label: "Perfil",
    icon: (isActive: boolean) => (
      <ProfileIcon
        className={`size-7 ${isActive ? "fill-current stroke-none" : "fill-none stroke-current"}`}
      />
    ),
  },
];
