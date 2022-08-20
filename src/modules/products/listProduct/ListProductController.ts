import { Request, Response } from "express";
import { ListProductService } from "./ListProductService";

export class ListProductController {
  constructor(private listProductService: ListProductService) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const products = await this.listProductService.execute();

    return response.json(products);
  }
}
