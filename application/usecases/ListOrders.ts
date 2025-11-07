import { Usecase } from "./Usecase";
import { ListOrdersRequest } from "../requests/ListOrdersRequest";
import { ListOrdersResponse } from "../responses/ListOrdersResponse";

export class ListOrders implements Usecase<ListOrdersRequest, ListOrdersResponse> {
  public async execute(request: ListOrdersRequest): Promise<ListOrdersResponse> {
    // ...
  }
}
