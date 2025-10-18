import { getWishlistIDs } from "@/app/(store)/services/wishListStorage";
import {
  BoltIcon,
  BagIcon,
  CategoryIcon,
  HeartIcon,
  MenuIcon,
  ProfileIcon,
  QuestionMarkIcon,
  SparklesIcon,
  PhoneIcon,
  DocumentTextIcon,
  ArrowUturnLeftIcon,
  CreditCardIcon,
  ShoppingCartIcon,
} from "@/assets/Icons";

export const headerActionIcons = [
  {
    icon: <HeartIcon className="size-7 cursor-pointer stroke-2" />,
    key: "Heart",
  },
  {
    icon: <ShoppingCartIcon className="size-7 cursor-pointer stroke-2" />,
    key: "Cart",
  },
  {
    icon: <MenuIcon className="size-7 cursor-pointer" />,
    key: "Menu",
    className: "flex lg:hidden",
  },
  {
    icon: <ProfileIcon className="size-7 cursor-pointer stroke-2" />,
    key: "Profile",
    className: "hidden lg:flex",
  },
];

export const sideMenuMainLinks = [
  {
    icon: <ProfileIcon className="size-7" />,
    label: "Meu Perfil",
  },
  {
    icon: <BagIcon className="size-7 fill-none stroke-black" />,
    label: "Seus Pedidos",
  },
  {
    icon: <HeartIcon className="size-7" />,
    label: "Lista de Desejos",
  },
  {
    icon: <ShoppingCartIcon className="size-7" />,
    label: "Seu Carrinho",
  },
  {
    icon: <CategoryIcon className="size-7 fill-none stroke-black" />,
    label: "Categorias",
    link: "#categoriesSection",
  },
  {
    icon: <SparklesIcon className="size-7 fill-none stroke-black" />,
    label: "Ofertas",
  },
  {
    icon: <BoltIcon className="size-7 fill-none stroke-red-500" />,
    className: "text-red-500",
    label: "Ofertas Relâmpago",
    link: "#flashSaleSection",
  },
];

export const sideMenuSupportLinks = [
  {
    icon: <PhoneIcon className="size-7" />,
    label: "Fale Conosco",
  },
  {
    icon: <CreditCardIcon className="size-7" />,
    label: "Métodos de Pagamento",
  },
  {
    icon: <ArrowUturnLeftIcon className="size-7" />,
    label: "Política de Troca",
  },
  {
    icon: <QuestionMarkIcon className="size-7" />,
    label: "Ajuda e FAQ",
  },
  {
    icon: <DocumentTextIcon className="size-7" />,
    label: "Termos de Uso",
  },
];
