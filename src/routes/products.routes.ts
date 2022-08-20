import { Router } from "express";

import { CreateProductFactory } from "../modules/products/createProduct/CreateProductFactory";
import { DeleteProductFactory } from "../modules/products/deleteProduct/DeleteProductFactory";
import { EditProductFactory } from "../modules/products/editProduct/EditProductFactory";
import { ListProductFactory } from "../modules/products/listProduct/ListProductFactory";

import { upload } from "../middleware/upload";

const productsRouter = Router();

productsRouter.post("/create", upload.single("image"), (req, res) =>
  CreateProductFactory().handle(req, res)
);

productsRouter.get("/list", (req, res) =>
  ListProductFactory().handle(req, res)
);

productsRouter.delete("/delete/:id", (req, res) =>
  DeleteProductFactory().handle(req, res)
);

productsRouter.put("/edit/:id", upload.single("image"), (req, res) =>
  EditProductFactory().handle(req, res)
);

export { productsRouter };
