import { PrismaProductsRepository } from "../../../repositories/prisma/PrismaProductsRepository";
import { ListProductController } from "./ListProductController";
import { ListProductService } from "./ListProductService";

export const ListProductFactory = () => {
  const productsRepository = new PrismaProductsRepository();
  const listProductService = new ListProductService(productsRepository);
  const listProductController = new ListProductController(listProductService);

  return listProductController;
};
