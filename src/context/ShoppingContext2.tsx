import React, { createContext, useState } from 'react'
import { ICoffeeData } from '../Data/coffeeData'

interface ICartItem extends ICoffeeData {
  price: number
  id: number
  quantity: number
}

interface IShoppingContext {
  cart: ICartItem[]
  addToCart: (item: ICoffeeData) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  totalItems: number
  calculateTotal: () => void
}

export const ShoppingContext = createContext<IShoppingContext | undefined>(
  undefined,
)

export const ShoppingProvider: React.FC<{ children: React.ReactNode }> = ({
  children, // Corrija o tipo como React.ReactNode
}) => {
  const [cart, setCart] = useState<ICartItem[]>([])
  const [totalItems, setTotalItems] = useState(0)

  const addToCart = (item: ICoffeeData) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + 1)
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item,
    )
    setCart(updatedCart)
  }

  const calculateTotal = () => {
    const total = cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
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
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}
