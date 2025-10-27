import type { Prisma } from "@prisma/client";

export type ProductInclude = Prisma.ProductGetPayload<{
  include: {
    category: { select: { id: true; name: true } };
    productOption: { include: { values: true } };
  };
}>;

export type CartInclude = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;
