import { Request, Response } from "express";
import { CreateProductService } from "./CreateProductService";

export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price, quantity } = request.body;
    const image = request.file?.path;

    const product = await this.createProductService.execute({
      name,
      description,
      quantity: Number(quantity),
      price: Number(price),
      image,
    });

    return response.status(200).json({ product });
  }
}
