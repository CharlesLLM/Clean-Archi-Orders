import { Entity } from "./Entity";

export class Order implements Entity {
  public constructor(
    public readonly identifier: string,
    public readonly updatedAt: Date,
    public readonly createdAt: Date
  ) {}
}
