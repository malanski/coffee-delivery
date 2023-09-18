import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ProductsCartContainer,
  OrderDetail,
  TotalOrder,
  ConfirmButton,
} from './styles'
import { ShoppingContext } from '../../../../context/ShoppingContext'
import { CartItem } from './Component/CartItem'
import { formatPrice } from '../../../../utils/formatPrice'

interface ICartFinalPrice {
  deliveryTax: number
  finalPrice: number
}

export const ProductsCart: React.FC<ICartFinalPrice> = () => {
  const shoppingContext = useContext(ShoppingContext)
  const { cart = [], totalItems = 0, calculateTotal } = shoppingContext || {}
  const navigate = useNavigate()

  // Use o useEffect para chamar calculateTotal quando o componente for montado
  useEffect(() => {
    if (calculateTotal) {
      calculateTotal()
    }
    // Chame calculateTotal sempre que o carrinho (cart) for atualizado
  }, [calculateTotal, cart])

  // Taxa de entrega é baseada em 2,7R$ mais 15% do valor total
  const deliveryTax = totalItems * 0.15 + 2.7
  const finalPrice = deliveryTax + totalItems
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
        <span>R$ {formatPrice(totalItems)}</span>
      </OrderDetail>

      <OrderDetail>
        <p>Entrega</p>
        {totalItems > 0 && <span>R$ {formatPrice(deliveryTax)}</span>}
      </OrderDetail>

      <TotalOrder>
        <h4>Total</h4>
        {totalItems > 0 && <p>R$ {formatPrice(finalPrice)}</p>}
      </TotalOrder>

      <ConfirmButton onClick={() => navigate('/order-success')}>
        Confirmar Pedido
      </ConfirmButton>
    </ProductsCartContainer>
  )
}
