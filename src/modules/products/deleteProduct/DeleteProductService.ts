import { AppError } from "../../../errors/AppError";
import { IProductsRepository } from "../../../repositories/types/IProductsRepository";

type Request = {
  id: number;
}

export class DeleteProductService {
  constructor(private productRepository: IProductsRepository ) {}

  async execute({ id }: Request): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Produto não encontrado!");
    }

    await this.productRepository.delete(id);
  }
}
