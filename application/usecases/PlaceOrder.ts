import { Order } from "../../domain/entities/Order";
import { OrderLine } from "../../domain/entities/OrderLine";
import { InMemoryOrderLineRepository } from "../../infrastructure/adapters/repositories/InMemoryOrderLineRepository";
import { InMemoryOrderRepository } from "../../infrastructure/adapters/repositories/InMemoryOrderRepository";
import { PlaceOrderRequest } from "../requests/PlaceOrderRequest";
import { PlaceOrderResponse } from "../responses/PlaceOrderResponse";
import { Usecase } from "./Usecase";

export class PlaceOrder implements Usecase<PlaceOrderRequest, PlaceOrderResponse> {
  public async execute(request: PlaceOrderRequest): Promise<PlaceOrderResponse> {
    const orderRepository = new InMemoryOrderRepository();
    const orderLineRepository = new InMemoryOrderLineRepository();

    const existingOrder = await orderRepository.findOrderById(request.identifier);
    if (null !== existingOrder) {
      const error = new Error('Order not found');

      // return { };
    }

    const existingOrderLine = await orderLineRepository.findOrderLineById(request.identifier);
    if (null !== existingOrderLine) {
      const error = new Error('Order not found');

      // return { };
    }

    const orderLine = OrderLine.from({
      identifier: request.identifier,
      createdAt: new Date(),
      updatedAt: new Date(),
      designation: request.designation,
      quantity: request.quantity,
      price: request.price,
      vatRate: request.vatRate,
    });

    await orderLineRepository.saveOrderLine(orderLine);

    const order = Order.from({
      identifier: request.identifier,
      createdAt: new Date(),
      updatedAt: new Date(),
      street: request.street,
      city: request.city,
      zipCode: request.zipCode,
      line: orderLine,
    });

    await orderRepository.saveOrder(order);

    return {
      error: null,
      orderIdentifier: order.identifier
    };
  }
}
