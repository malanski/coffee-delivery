export type PaymentMethodType =
  | 'Cartão de Crédito'
  | 'Cartão de Debito'
  | 'Dinheiro'

interface IDataForm {
  zipCode: string
  streetName: string
  streetNumber: string
  complement: string
  district: string
  city: string
  county: string
}
