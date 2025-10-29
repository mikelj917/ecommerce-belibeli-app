import type { ProductInclude } from "./Includes";

export type ProductOptionsArray = ProductInclude["productOption"];

export type OptionValue = {
  id: number;
  value: string;
};

export interface ProductOption {
  id: number;
  type: string;
  values: OptionValue[];
}


