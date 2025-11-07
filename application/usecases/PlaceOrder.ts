import { PlaceOrderRequest } from "../requests/PlaceOrderRequest";
import { PlaceOrderResponse } from "../responses/PlaceOrderResponse";
import { Usecase } from "./Usecase";

export class PlaceOrder implements Usecase<PlaceOrderRequest, PlaceOrderResponse> {
  public async execute(request: PlaceOrderRequest): Promise<PlaceOrderResponse> {
    // ... 
  }
}
