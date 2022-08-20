import { Product } from "@prisma/client";
import * as Yup from "yup";
import { IProductsRepository } from "../../../repositories/types/IProductsRepository";

type Request = {
  name: string;
  description: string;
  quantity: number;
  price: number;
  image?: string;
};

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "O nome do produto deve ter pelo menos 3 caracteres!")
    .required("O nome do produto é obrigatório!"),
  description: Yup.string()
    .min(5, "A descrição do produto deve ter pelo menos 5 caracteres!")
    .required("A descrição do produto é obrigatória!"),
  price: Yup.number().required("O preço do produto é obrigatório!"),
});

export class CreateProductService {
  constructor(private productRepository: IProductsRepository) {}
  async execute({
    name,
    description,
    quantity,
    price,
    image,
  }: Request): Promise<Product> {
    await schema.validate({ name, description, price });

    const product = await this.productRepository.create(
      name,
      description,
      quantity,
      price,
      image
    );

    return product;
  }
}
