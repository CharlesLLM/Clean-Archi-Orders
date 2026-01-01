import { Entity } from "./Entity";
import { OrderLine } from "./OrderLine";

export type OrderStatus = 'PENDING' | 'PAID' | 'SHIPPED' | 'CANCELLED';

export class Order implements Entity {
  public status: OrderStatus;
  public lines: OrderLine[];
  public amount: number;

  public constructor(
    public readonly identifier: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public street: string,
    public city: string,
    public zipCode: string,
    line: OrderLine,
  ) {
    this.status = 'PENDING';
    this.lines.push(line);
    this.refreshTotal();
  }

  public static from({ identifier, createdAt, updatedAt, street, city, zipCode, line }: { identifier: string, createdAt: Date, updatedAt: Date, street: string, city: string, zipCode: string, line: OrderLine}) {
    return new Order(
      identifier,
      createdAt,
      updatedAt,
      street,
      city,
      zipCode,
      line,
    );
  }

  get total(): number {
    return this.lines.reduce((s,l)=> s + l.amount, 0);
  }

  refreshTotal(): void {
    this.amount = this.total;
  }

  cancel(): void {
    this.status = 'CANCELLED';
  }
}
