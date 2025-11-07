import { Usecase } from "./Usecase";
import { GetOrderRequest } from "../requests/GetOrderRequest";
import { GetOrderResponse } from "../responses/GetOrderResponse";

export class GetOrder implements Usecase<GetOrderRequest, GetOrderResponse> {
  public async execute(request: GetOrderRequest): Promise<GetOrderResponse> {
    // ...
  }
}
