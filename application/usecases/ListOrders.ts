import { Usecase } from "./Usecase";
import { ListOrdersRequest } from "../requests/ListOrdersRequest";
import { ListOrdersResponse } from "../responses/ListOrdersResponse";
import { InMemoryOrderRepository } from "../../infrastructure/adapters/repositories/InMemoryOrderRepository";

export class ListOrders implements Usecase<ListOrdersRequest, ListOrdersResponse> {
  public async execute(request: ListOrdersRequest): Promise<ListOrdersResponse> {
    const orderRepository = new InMemoryOrderRepository();

    return {
      orders: await orderRepository.listOrders(),
    };
  }
}
