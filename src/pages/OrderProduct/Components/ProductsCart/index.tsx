import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ProductsCartContainer,
  OrderDetail,
  TotalOrder,
  ConfirmButton,
  EmptyCart,
} from './styles'
import { ShoppingContext } from '../../../../context/ShoppingContext'
import { CartItem } from './Component/CartItem'
import { formatPrice } from '../../../../utils/formatPrice'

export const ProductsCart: React.FC = () => {
  const shoppingContext = useContext(ShoppingContext)
  const { cart = [], totalItems = 0, calculateTotal } = shoppingContext || {}
  const navigate = useNavigate()

  useEffect(() => {
    if (calculateTotal) {
      calculateTotal()
    }
  }, [calculateTotal, cart])

  const deliveryTax = totalItems * 0.15 + 2.7
  const finalPrice = deliveryTax + totalItems
  const isEmpty = cart.length === 0

  return (
    <ProductsCartContainer>
      {isEmpty ? (
        <EmptyCart>
          O seu carrinho vazio, que tal{' '}
          <a onClick={() => navigate('/')}>um cafezinho!</a>
        </EmptyCart>
      ) : (
        <>
          {cart.map(
            (product: {
              id: number
              name: string
              price: number
              options: string[]
              iconSrc: string
              cartQuantity: number
            }) => (
              <CartItem
                key={product.id as number}
                id={product.id as number}
                name={product.name}
                price={product.price}
                options={product.options}
                iconSrc={product.iconSrc}
                qnty={product.cartQuantity}
              />
            ),
          )}
          <OrderDetail>
            <p>Total de itens</p>
            <span>R$ {formatPrice(totalItems)}</span>
          </OrderDetail>

          <OrderDetail>
            <p>Entrega</p>
            <span>R$ {formatPrice(deliveryTax)}</span>
          </OrderDetail>

          <TotalOrder>
            <h4>Total</h4>
            <p>R$ {formatPrice(finalPrice)}</p>
          </TotalOrder>
        </>
      )}

      <ConfirmButton
        title="Clique aqui para confirmar seu pedido"
        disabled={isEmpty}
        type="submit"
      >
        Confirmar Pedido
      </ConfirmButton>
    </ProductsCartContainer>
  )
}
