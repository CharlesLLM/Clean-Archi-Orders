import { OrderLine } from "../../../domain/entities/OrderLine";

export interface OrderLineRepository {
  saveOrderLine(orderLine: OrderLine): Promise<void>;
  findOrderLineById(id: string): Promise<OrderLine | null>;
}
