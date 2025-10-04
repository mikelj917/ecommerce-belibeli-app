import { formatNumber } from "@/shared/utils/format-number";
type Props = {
  digit: number;
  separator: boolean;
};

export const FlashSaleDigit = ({ digit, separator }: Props) => {
  return (
    <>
      <span className="rounded-full bg-red-500 px-2 py-1 font-bold text-white">
        {formatNumber(digit)}
      </span>
      {separator && <span className="text-lg font-bold">:</span>}
    </>
  );
};
