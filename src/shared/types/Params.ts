export type CreateCartParams = {
  productID: number;
  quantity: number;
  productOptions: BackendOption[];
};

export interface BackendOption {
  optionId: number;
  optionValueId: number;
}
