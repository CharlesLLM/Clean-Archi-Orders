export interface UpdateOrderLineRequest {
  identifier: string,
  designation: string
  quantity: number
  price: number
  vatRate: number
}
