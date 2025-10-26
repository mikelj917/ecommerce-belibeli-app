import type { ProductInclude } from "@/shared/types/Includes";

export function isSaleActive(product: ProductInclude) {
  if (!product.promotionEnd) return false;

  const now = new Date();
  const end = new Date(product.promotionEnd);

  return now < end;
}
