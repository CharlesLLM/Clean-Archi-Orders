import { CancelOrderRequest } from "../requests/CancelOrderRequest";
import { CancelOrderResponse } from "../responses/CancelOrderResponse";
import { Usecase } from "./Usecase";

export class CancelOrder implements Usecase<CancelOrderRequest, CancelOrderResponse> {
  public async execute(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    //...
  } 
}
