import { Product } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { IProductsRepository } from "../../../repositories/types/IProductsRepository";

type Request = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image?: string;
};

export class EditProductService {
  constructor(private productRepository: IProductsRepository) {}

  async execute({
    id,
    name,
    description,
    quantity,
    price,
    image,
  }: Request): Promise<Product> {
    const product: any = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Produto não encontrado!");
    }

    if (!name && !description && !price && !image && !quantity) {
      throw new AppError("Nenhum dado para atualizar!");
    }

    // refactor this condition
    if (!name) {
      name = product.name;
    }
    if (!description) {
      description = product.description;
    }
    if (!price) {
      price = product.price;
    }
    if (!quantity) {
      quantity = product.quantity;
    }
    if (!image) {
      image = product.image;
    }

    const updatedProduct = await this.productRepository.update(
      id,
      name,
      description,
      quantity,
      price,
      image
    );

    return updatedProduct;
  }
}
