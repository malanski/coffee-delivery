export const formatPrice = (value: number): string => {
  const priceFormat = value.toFixed(2).toString().replace('.', ',')

  return priceFormat
}
