import { createContext, ReactNode, useState } from 'react'
import { IProductsDataCart } from '../@types/interfaces'

interface IShoppingContextType {
  productsCart: IProductsDataCart[]
  totalItems: number
  setProductsToCart: (product: IProductsDataCart) => void
  removeProductCart: (id: number) => void
  moreQntyProduct: (qntyProduct: number, price: number) => number
  lessQntyProduct: (qntyProduct: number, price: number) => number
}

export const ShoppingContext = createContext({} as IShoppingContextType)

interface IShoppingContextProviderProps {
  children: ReactNode
}

export const ShoppingContextProvider = ({
  children,
}: IShoppingContextProviderProps) => {
  const [productsCart, setProductsCart] = useState<IProductsDataCart[]>([])
  const [totalItems, setTotalItems] = useState(0)

  const setProductsToCart = (product: IProductsDataCart) => {
    const productIndex = productsCart.findIndex(
      (productCart) => productCart.id === product.id,
    )

    if (productIndex !== -1) {
      productsCart[productIndex].qnty += product.qnty
    } else {
      setProductsCart((prevState) => [...prevState, product])
    }
    calculateTotalItems()
  }

  const removeProductCart = (id: number) => {
    const productsCartWithoutProductToDelete = productsCart.filter(
      (productCart) => productCart.id !== id,
    )

    setProductsCart(productsCartWithoutProductToDelete)
    calculateTotalItems()
  }

  // const calculateTotalItems = () => {
  //   const totalValue = productsCart.reduce((accumulator, product) => {
  //     const productTotal = product.price * product.qnty

  //     console.log(`${product.name} Product Total: ${productTotal}`)
  //     console.log(`${product.name} Accumulator is: ${accumulator}`)

  //     return accumulator + productTotal
  //   }, 0)
  //   setTotalItems(totalValue)
  //   console.log(`Total Value: ${totalValue}`)

  //   calculateTotalItemsCount()
  // }

  const calculateTotalItems = () => {
    const totalValue = productsCart.reduce((accumulator, product) => {
      const productTotal = accumulator + product.price * product.qnty

      console.log(`${product.name} Product Total: ${productTotal}`)
      console.log(`${product.name} Accumulator is: ${accumulator}`)
      return productTotal
    }, 0)

    setTotalItems(totalValue)
    console.log(`Total Value: ${totalValue}`)
  }

  // const calculateTotalItemsCount = () => {
  //   return productsCart.reduce(
  //     (accumulator, product) => accumulator + product.qnty,
  //     0,
  //   )
  // }

  const moreQntyProduct = (qntyProduct: number, price: number) => {
    const newQnty = qntyProduct + 1

    // Update total items when increasing quantity
    setTotalItems(totalItems + price)
    // calculateTotalItems()
    console.log(`Total price: ${price}`)

    return newQnty
  }

  const lessQntyProduct = (qntyProduct: number, price: number) => {
    if (qntyProduct === 1) return qntyProduct

    const newQnty = qntyProduct - 1

    // Update total items when decreasing quantity
    setTotalItems(totalItems - price)
    // calculateTotalItems()
    console.log(`Total price: ${price}`)

    return newQnty
  }

  return (
    <ShoppingContext.Provider
      value={{
        productsCart,
        totalItems,
        setProductsToCart,
        removeProductCart,
        moreQntyProduct,
        lessQntyProduct,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}
