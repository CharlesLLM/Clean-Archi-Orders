import { Usecase } from "./Usecase";
import { RemoveOrderLineRequest } from "../requests/RemoveOrderLineRequest";
import { RemoveOrderLineResponse } from "../responses/RemoveOrderLineResponse";

export class RemoveOrderLine implements Usecase<RemoveOrderLineRequest, RemoveOrderLineResponse> {
  public async execute(request: RemoveOrderLineRequest): Promise<RemoveOrderLineResponse> {
    // ...
  }
}
