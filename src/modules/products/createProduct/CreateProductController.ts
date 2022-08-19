import { Request, Response } from "express";
import { CreateProductService } from "./CreateProductService";

export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body;
    const image = request.file?.path;

    const product = await this.createProductService.execute({
      name,
      description,
      price: Number(price),
      image,
    });

    return response.status(200).json({ product });
  }
}
