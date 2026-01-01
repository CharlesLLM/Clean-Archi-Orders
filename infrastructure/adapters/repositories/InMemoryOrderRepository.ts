import { OrderRepository } from "../../../application/ports/repositories/OrderRepository";
import { Order } from "../../../domain/entities/Order";

export class InMemoryOrderRepository implements OrderRepository {
  private orders = new Map<string, Order>();

  public async saveOrder(order: Order){
    this.orders.set(order.identifier, order);
  }

  public async findOrderById(identifier: string){
    return this.orders.get(identifier) ?? null;
  }

  public async listOrders(){
    return Array.from(this.orders.values());
  }
}
