import { Usecase } from "./Usecase";
import { GetOrderRequest } from "../requests/GetOrderRequest";
import { GetOrderResponse } from "../responses/GetOrderResponse";
import { InMemoryOrderRepository } from "../../infrastructure/adapters/repositories/InMemoryOrderRepository";

export class GetOrder implements Usecase<GetOrderRequest, GetOrderResponse> {
  public async execute(request: GetOrderRequest): Promise<GetOrderResponse> {
    const orderRepository = new InMemoryOrderRepository();

    const order = await orderRepository.findOrderById(request.identifier);
    if (null == order) {
      const error = new Error('Order not found');

      return { order: null };
    }

    return {
      order: order,
    };
  }
}
