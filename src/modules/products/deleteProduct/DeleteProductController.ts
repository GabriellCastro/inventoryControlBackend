import { Request, Response } from "express";
import { DeleteProductService } from "./DeleteProductService";

export class DeleteProductController {
  constructor(private deleteProductService: DeleteProductService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteProductService.execute({ id: Number(id) });

    return response.status(204).send();
  }
}
