import React, { createContext, useState } from 'react'
import { ICoffeeData } from '../Data/coffeeData'
import { IDataForm, PaymentMethodType } from '../@types/interfaces'

interface ICartItem extends ICoffeeData {
  price: number
  id: number
  cartQuantity: number
}

interface IShoppingContext {
  cart: ICartItem[]
  addToCart: (item: ICoffeeData) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, cartQuantity: number) => void
  totalItems: number
  calculateTotal: () => void
  selectedPayment: PaymentMethodType | null
  dataFormShopping: IDataForm | null
  setSelectedPayment: (paymentMethod: PaymentMethodType) => void
  setDataFormShopping: (dataFormShopping: IDataForm) => void
}

export const ShoppingContext = createContext({} as IShoppingContext)

export const ShoppingProvider: React.FC<{ children: React.ReactNode }> = ({
  children, // Corrija o tipo como React.ReactNode
}) => {
  const [cart, setCart] = useState<ICartItem[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [selectedPayment, setSelectedPayment] =
    useState<PaymentMethodType | null>(null)
  const [dataFormShopping, setDataFormShopping] = useState<IDataForm | null>(
    null,
  )
  const addToCart = (item: ICoffeeData) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.cartQuantity + 1)
    } else {
      setCart([...cart, { ...item, cartQuantity: item.qnty }])
    }
  }

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  const updateQuantity = (id: number, cartQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, cartQuantity } : item,
    )
    setCart(updatedCart)
  }

  const calculateTotal = () => {
    const total = cart.reduce(
      (accumulator, item) => accumulator + item.price * item.cartQuantity,
      0,
    )
    setTotalItems(total)
  }

  return (
    <ShoppingContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        calculateTotal,
        selectedPayment,
        setSelectedPayment,
        dataFormShopping,
        setDataFormShopping,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}
