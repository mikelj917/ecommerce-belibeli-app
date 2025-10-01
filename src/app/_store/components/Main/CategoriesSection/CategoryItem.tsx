import Image, { type StaticImageData } from "next/image";

type Props = {
  logo: StaticImageData;
  label: string;
  onClick?: () => void;
};

export const CategoryItem = ({ logo, label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center justify-center transition hover:opacity-50"
    >
      <div className="relative h-20 w-20 md:h-30 md:w-30">
        <Image
          src={logo}
          alt={label}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <span className="font-bold">{label}</span>
    </button>
  );
};
