import { Router } from "express";
import { CreateProductFactory } from "../modules/products/createProduct/CreateProductFactory";

const productsRouter = Router();

productsRouter.post("/create", (req, res) =>
  CreateProductFactory().handle(req, res)
);

export { productsRouter };
