import { Product } from "@prisma/client";
import { prisma } from "../../database/client";
import { IProductsRepository } from "../../repositories/types/IProductsRepository";

export class PrismaProductsRepository implements IProductsRepository {
  async create(
    name: string,
    description: string,
    price: number,
    image?: string
  ): Promise<Product> {

    if(image) {
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price,
          image,
        },
      });
  
      return product;
    } else {
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price,
        },
      });
  
      return product;
    }

  }

  async getAll(): Promise<Product[]> {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });

    return products;
  }

  async findById(id: number): Promise<Product | null> {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });

    return product;
  }

  async delete(id: number): Promise<Product> {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    return product;
  }
}
