import { Router } from "express";
import { CreateProductFactory } from "../modules/products/createProduct/CreateProductFactory";
import { upload } from "../middleware/upload";

const productsRouter = Router();

productsRouter.post("/create", upload.single("image"), (req, res) =>
  CreateProductFactory().handle(req, res)
);

export { productsRouter };
