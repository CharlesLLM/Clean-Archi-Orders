import { Order } from "../../../domain/entities/Order";

export interface OrderRepository {
  saveOrder(order: Order): Promise<void>;
  findOrderById(id: string): Promise<Order | null>;
  listOrders(): Promise<Order[]>;
}
