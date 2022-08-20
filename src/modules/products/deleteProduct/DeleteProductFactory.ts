import { PrismaProductsRepository } from "../../../repositories/prisma/PrismaProductsRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductService } from "./DeleteProductService";

export const DeleteProductFactory = () => {
  const productsRepository = new PrismaProductsRepository();
  const deleteProductService = new DeleteProductService(productsRepository);
  const deleteProductController = new DeleteProductController(
    deleteProductService
  );

  return deleteProductController;
};
