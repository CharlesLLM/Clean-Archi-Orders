import { OrderLineRepository } from "../../../application/ports/repositories/OrderLineRepository";
import { OrderLine } from "../../../domain/entities/OrderLine";

export class InMemoryOrderLineRepository implements OrderLineRepository {
  private orderLines = new Map<string, OrderLine>();

  public async saveOrderLine(orderLine: OrderLine){
    this.orderLines.set(orderLine.identifier, orderLine);
  }

  public async findOrderLineById(identifier: string){
    return this.orderLines.get(identifier) ?? null;
  }
}
