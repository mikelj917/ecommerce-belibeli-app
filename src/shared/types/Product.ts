export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  totalQuantity: number;
  soldQuantity: number;
  rating?: {
    rate: number;
    count: number;
  };
};
