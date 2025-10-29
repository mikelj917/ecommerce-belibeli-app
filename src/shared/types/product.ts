import type { ProductOption, ProductOptionValue } from "@prisma/client";
import type { ProductInclude } from "./Includes";

export type ProductOptionsArray = ProductInclude["productOption"];

export type OptionValue = ProductOptionValue;

export type ProductOption1 = ProductOption & {
  values: OptionValue[];
};
