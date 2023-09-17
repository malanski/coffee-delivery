import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ProductsCartContainer,
  OrderDetail,
  TotalOrder,
  ConfirmButton,
} from './styles'
import { ShoppingContext } from '../../../../context/ShoppingContext2'
import { CartItem } from './Component/CartItem'

export const ProductsCart: React.FC = () => {
  const shoppingContext = useContext(ShoppingContext)
  const { cart = [], totalItems = 0, calculateTotal } = shoppingContext || {}
  const navigate = useNavigate()

  // Use o useEffect para chamar calculateTotal quando o componente for montado
  useEffect(() => {
    if (calculateTotal) {
      calculateTotal()
    }
  }, [calculateTotal, cart]) // Chame calculateTotal sempre que o carrinho (cart) for atualizado

  return (
    <ProductsCartContainer>
      {cart.map(
        (product: {
          id: number
          name: string
          price: number
          options: string[]
          iconSrc: string
          quantity: number
        }) => (
          <CartItem
            key={product.id as number}
            id={product.id as number}
            name={product.name}
            price={product.price}
            options={product.options}
            iconSrc={product.iconSrc}
            qnty={product.quantity}
          />
        ),
      )}

      <OrderDetail>
        <p>Total de itens</p>
        <span>R$ {totalItems.toFixed(2)}</span>
      </OrderDetail>

      <OrderDetail>
        <p>Entrega</p>
        <span>R$ 3,70</span>
      </OrderDetail>

      <TotalOrder>
        <h4>Total</h4>
        <p>R$ {(totalItems + 3.7).toFixed(2)}</p>
      </TotalOrder>

      <ConfirmButton onClick={() => navigate('/order-success')}>
        Confirmar Pedido
      </ConfirmButton>
    </ProductsCartContainer>
  )
}
