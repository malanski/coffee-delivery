import { createContext, ReactNode, useState } from 'react'
import { IProductsDataCart } from '../@types/interfaces'

interface IShoppingContextType {
  productsCart: IProductsDataCart[]
  totalItems: number
  setProductsToCart: (product: IProductsDataCart) => void
  removeProductCart: (id: number) => void
  calculateTotalItems: () => void
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

      return
    }

    setProductsCart((prevState) => [...prevState, product])
  }

  const removeProductCart = (id: number) => {
    const productsCartWithoutProductToDelete = productsCart.filter(
      (productCart) => productCart.id !== id,
    )

    setProductsCart(productsCartWithoutProductToDelete)
  }

  const calculateTotalItems = () => {
    const totalValue = productsCart.reduce(
      (accumulator, product) => accumulator + product.price * product.qnty,
      0,
    )

    setTotalItems(totalValue)
  }

  const moreQntyProduct = (qntyProduct: number, price: number) => {
    const newQnty = qntyProduct + 1

    setTotalItems(totalItems + price)
    // calculateTotalItems()

    return newQnty
  }

  const lessQntyProduct = (qntyProduct: number, price: number) => {
    if (qntyProduct === 1) return qntyProduct

    const newQnty = qntyProduct - 1

    setTotalItems(totalItems - price)
    // calculateTotalItems()

    return newQnty
  }

  return (
    <ShoppingContext.Provider
      value={{
        productsCart,
        totalItems,
        setProductsToCart,
        removeProductCart,
        calculateTotalItems,
        moreQntyProduct,
        lessQntyProduct,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}
