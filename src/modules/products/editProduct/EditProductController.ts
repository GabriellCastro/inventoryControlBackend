import { Request, Response } from "express";
import { EditProductService } from "./EditProductService";

export class EditProductController {
  constructor(private editProductService: EditProductService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, price } = request.body;
    const image = request.file?.path;

    await this.editProductService.execute({
      id: Number(id),
      name,
      description,
      price,
      image,
    });

    return response.status(200).send();
  }
}
