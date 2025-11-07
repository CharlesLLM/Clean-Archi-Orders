import { Usecase } from "./Usecase";

export class UpdateOrderLine implements Usecase<UpdateOrderLineRequest, UpdateOrderLineResponse> {
  public async execute(request: UpdateOrderLineRequest): Promise<UpdateOrderLineResponse> {
    //... 
  }
}
