import Image from "next/image";
import HeroBannerMob from "@/assets/banners/hero-banner-mob.webp";
import HeroBannerDesk from "@/assets/banners/hero-banner.webp";

export const HeroBanner = () => {
  return (
    <section className="relative flex w-full justify-center pt-26 lg:pt-0">
      <Image
        src={HeroBannerMob}
        alt="Hero-Banner"
        className="w-full md:hidden"
      />
      <Image
        src={HeroBannerDesk}
        alt="Hero-Banner"
        className="hidden w-full md:block"
      />
      <button className="absolute bottom-20 cursor-pointer rounded-full bg-red-600 px-6 py-4 font-bold text-white transition-colors hover:bg-red-700">
        COMPRAR AGORA
      </button>
    </section>
  );
};
