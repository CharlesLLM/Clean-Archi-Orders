import { Entity } from "./Entity";

export class OrderLine implements Entity {
  public constructor(
    public readonly identifier: string,
    public readonly updatedAt: Date,
    public readonly createdAt: Date,
    public designation: string,
    public price: number,
    public quantity: number,
    public vatRate: number,
  ) {}

  public static from({ identifier, createdAt, updatedAt, designation, price, quantity, vatRate }: { identifier: string, createdAt: Date, updatedAt: Date, designation: string, quantity: number, price: number, vatRate: number}) {
    return new OrderLine(
      identifier,
      createdAt,
      updatedAt,
      designation,
      price,
      quantity,
      vatRate,
    );
  }

  get amount(): number {
    return (this.price * this.quantity) * (1 + this.vatRate / 100);
  }
}
