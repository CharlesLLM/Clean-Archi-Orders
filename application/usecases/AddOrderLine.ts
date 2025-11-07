import { Usecase } from "./Usecase";
import { AddOrderLineRequest } from "../requests/AddOrderLineRequest";
import { AddOrderLineResponse } from "../responses/AddOrderLineResponse";

export class AddOrderLine implements Usecase<AddOrderLineRequest, AddOrderLineResponse> {
  public async execute(request: AddOrderLineRequest): Promise<AddOrderLineResponse> {
    // ...
  }
}
