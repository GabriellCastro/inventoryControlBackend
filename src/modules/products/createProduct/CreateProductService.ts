import { Product } from "@prisma/client";
import * as Yup from "yup";
import { IProductsRepository } from "../../../repositories/types/IProductsRepository";

type Request = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "O nome do produto deve ter pelo menos 3 caracteres!")
    .required("O nome do produto é obrigatório!"),
  description: Yup.string()
    .min(5, "A descrição do produto deve ter pelo menos 5 caracteres!")
    .required("A descrição do produto é obrigatória!"),
  price: Yup.number().required("O preço do produto é obrigatório!"),
  image: Yup.string().required("A imagem do produto é obrigatória!"),
});

export class CreateProductService {
  constructor(private productRepository: IProductsRepository) {}
  async execute({
    name,
    description,
    price,
    image,
  }: Request): Promise<Product> {
    await schema.validate({ name, description, price, image });

    const product = await this.productRepository.create(
      name,
      description,
      price,
      image
    );

    return product;
  }
}
