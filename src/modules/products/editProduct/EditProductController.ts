import { Request, Response } from "express";
import { EditProductService } from "./EditProductService";

export class EditProductController {
  constructor(private editProductService: EditProductService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, price, quantity } = request.body;
    const image = request.file?.path;

    await this.editProductService.execute({
      id: Number(id),
      name,
      description,
      quantity: Number(quantity),
      price: Number(price),
      image,
    });

    return response.status(200).send();
  }
}
