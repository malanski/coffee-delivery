import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import {
  ProductsCartContainer,
  OrderDetail,
  TotalOrder,
  ConfirmButton,
} from './styles'
import { ShoppingContext } from '../../../../context/ShoppingContext'
import { formatPrice } from '../../../../utils/formatPrice'
import { CartItem } from './Component/CartItem'

export const ProductsCart = () => {
  const { productsCart, totalItems } = useContext(ShoppingContext)
  const navigate = useNavigate()

  const formatTotalItems = formatPrice(totalItems)

  return (
    <ProductsCartContainer>
      {productsCart.map((product) => (
        <CartItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          options={product.options}
          iconSrc={product.iconSrc}
          qnty={product.qnty}
        />
      ))}

      <OrderDetail>
        <p>Total de itens</p>
        <span>R$ {formatTotalItems}</span>
      </OrderDetail>

      <OrderDetail>
        <p>Entrega</p>
        <span>R$ 3,70</span>
      </OrderDetail>

      <TotalOrder>
        <h4>Total</h4>
        <p>R$ {formatTotalItems}</p>
      </TotalOrder>

      <ConfirmButton onClick={() => navigate('/order-success')}>
        Confirmar Pedido
      </ConfirmButton>
    </ProductsCartContainer>
  )
}
