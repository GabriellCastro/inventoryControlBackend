import { Product } from "@prisma/client";

export type IProductsRepository = {
  create: (
    name: string,
    description: string,
    price: number,
    image: string
  ) => Promise<Product>;
  getAll: () => Promise<Product[]>;
};
