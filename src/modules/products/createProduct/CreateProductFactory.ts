import { PrismaProductsRepository } from "../../../repositories/prisma/PrismaProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductService } from "./CreateProductService";

export const CreateProductFactory = () => {
  const productsRepository = new PrismaProductsRepository();
  const createProductService = new CreateProductService(productsRepository);
  const createProductController = new CreateProductController(
    createProductService
  );

  return createProductController;
};
