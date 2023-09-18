export interface IProductsDataCart {
  id: number
  name: string
  options: string[]
  iconSrc: string
  price: number
  qnty: number
}

export interface ICoffeeData {
  id: number
  name: string
  description: string
  options: string[]
  iconSrc: string
  imgSrc?: string
  price: number
  qnty: number
}
