import { Product } from "@prisma/client";
import { prisma } from "../../database/client";
import { IProductsRepository } from "../../repositories/types/IProductsRepository";

export class PrismaProductsRepository implements IProductsRepository {
  async create(
    name: string,
    description: string,
    price: number,
    image: string
  ): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
      },
    });

    return product;
  }

  async getAll(): Promise<Product[]> {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });

    return products;
  }
}
