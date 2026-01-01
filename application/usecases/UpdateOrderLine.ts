import { InMemoryOrderLineRepository } from "../../infrastructure/adapters/repositories/InMemoryOrderLineRepository";
import { UpdateOrderLineRequest } from "../requests/UpdateOrderLineRequest";
import { UpdateOrderLineResponse } from "../responses/UpdateOrderLineResponse";
import { Usecase } from "./Usecase";

export class UpdateOrderLine implements Usecase<UpdateOrderLineRequest, UpdateOrderLineResponse> {
  public async execute(request: UpdateOrderLineRequest): Promise<UpdateOrderLineResponse> {
    const orderLineRepository = new InMemoryOrderLineRepository();

    const orderLine = await orderLineRepository.findOrderLineById(request.identifier);
    if (null === orderLine) {
      const error = new Error('Order line not found');

      return { error: error };
    }

    orderLine.quantity = request.quantity;
    orderLine.designation = request.designation;
    orderLine.price = request.price;
    orderLine.vatRate = request.vatRate;

    return {
      error: null,
    };
  }
}
