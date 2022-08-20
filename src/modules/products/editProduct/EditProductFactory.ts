import { PrismaProductsRepository } from "../../../repositories/prisma/PrismaProductsRepository";
import { EditProductController } from "./EditProductController";
import { EditProductService } from "./EditProductService";

export const EditProductFactory = () => {
  const productsRepository = new PrismaProductsRepository();
  const editProductService = new EditProductService(productsRepository);
  const editProductController = new EditProductController(editProductService);

  return editProductController;
};
