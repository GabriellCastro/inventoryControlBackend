import { Product } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { IProductsRepository } from "../../../repositories/types/IProductsRepository";

export class ListProductService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute(): Promise<Product[]> {
    const products = await this.productsRepository.getAll();

    if (!products) {
      throw new AppError("Nenhum produto encontrado!");
    }

    return products;
  }
}