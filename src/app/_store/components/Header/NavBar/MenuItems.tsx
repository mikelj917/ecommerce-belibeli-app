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
    icon: <HeartIcon className="cursor-pointer fill-none stroke-current" />,
    key: "Heart",
  },
  {
    icon: <ShoppingCartIcon className="cursor-pointer fill-none stroke-current" />,
    key: "Cart",
  },
  {
    icon: (
      <MenuIcon className="cursor-pointer fill-current stroke-none lg:hidden" />
    ),
    key: "Menu",
  },
];

export const sideMenuMainLinks = [
  {
    icon: <ProfileIcon className="fill-none stroke-black" />,
    label: "Meu Perfil",
  },
  {
    icon: <BagIcon className="fill-none stroke-black" />,
    label: "Seus Pedidos",
  },
  {
    icon: <HeartIcon className="fill-none stroke-black" />,
    label: "Lista de Desejos",
  },
  {
    icon: <ShoppingCartIcon className="fill-none stroke-black" />,
    label: "Seu Carrinho",
  },
  {
    icon: <CategoryIcon className="fill-none stroke-black" />,
    label: "Categorias",
  },
  {
    icon: <SparklesIcon className="fill-none stroke-black" />,
    label: "Ofertas",
  },
  {
    icon: <BoltIcon className="fill-none stroke-red-500" />,
    className: "text-red-500",
    label: "Ofertas Relâmpago",
  },
];

export const sideMenuSupportLinks = [
  {
    icon: <PhoneIcon className="fill-none stroke-black" />,
    label: "Fale Conosco",
  },
  {
    icon: <CreditCardIcon className="fill-none stroke-black" />,
    label: "Métodos de Pagamento",
  },
  {
    icon: <ArrowUturnLeftIcon className="fill-none stroke-black" />,
    label: "Política de Troca",
  },
  {
    icon: <QuestionMarkIcon className="fill-none stroke-black" />,
    label: "Ajuda e FAQ",
  },
  {
    icon: <DocumentTextIcon className="fill-none stroke-black" />,
    label: "Termos de Uso",
  },
];
