import { Bolt } from "@/assets/Icons/Bolt";
import { FlashSaleTimer } from "./FlashSaleTimer";

export const SectionHeader = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Bolt className="h-8 w-8 rounded-full bg-black p-1.5 text-white" />
      <h1 className="text-lg font-bold mr-2">Ofertas Relâmpago</h1>

      {/* Passe uma data em formato UTC, ex:2026-10-27T10:00:00Z */}
      <FlashSaleTimer endDate="2025-10-08T10:00:00Z" />
    </div>
  );
};
