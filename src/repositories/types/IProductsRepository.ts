import { Product } from "@prisma/client";

export type IProductsRepository = {
  create: (
    name: string,
    description: string,
    price: number,
    image: string
  ) => Promise<Product>;
  getAll: () => Promise<Product[]>;
  delete: (id: number) => Promise<Product>;
  findById: (id: number) => Promise<Product | null>;
};
