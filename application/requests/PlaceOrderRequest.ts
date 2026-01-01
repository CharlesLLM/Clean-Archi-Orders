export interface PlaceOrderRequest {
  readonly identifier: string,
  readonly street: string
  readonly city: string
  readonly zipCode: string
  readonly designation: string
  readonly quantity: number
  readonly price: number
  readonly vatRate: number
}
