import { CartIcon, HeartIcon, MenuIcon } from "@/assets/Icons";

export const headerNavBarIcons = [
  {
    icon: <HeartIcon className="cursor-pointer fill-none stroke-current" />,
    key: "Heart",
  },
  {
    icon: <CartIcon className="cursor-pointer fill-none stroke-current" />,
    key: "Cart",
  },
  {
    icon: (
      <MenuIcon className="cursor-pointer fill-current stroke-none lg:hidden" />
    ),
    key: "Menu",
  },
];
