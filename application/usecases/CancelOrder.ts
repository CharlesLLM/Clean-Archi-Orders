import { InMemoryOrderRepository } from "../../infrastructure/adapters/repositories/InMemoryOrderRepository";
import { CancelOrderRequest } from "../requests/CancelOrderRequest";
import { CancelOrderResponse } from "../responses/CancelOrderResponse";
import { Usecase } from "./Usecase";

export class CancelOrder implements Usecase<CancelOrderRequest, CancelOrderResponse> {
  public async execute(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    const orderRepository = new InMemoryOrderRepository();

    const order = await orderRepository.findOrderById(request.identifier);
    if (null === order) {
      const error = new Error('Order not found');

      return { error: error };
    }

    order.cancel();

    return {
      error: null,
    };
  } 
}
