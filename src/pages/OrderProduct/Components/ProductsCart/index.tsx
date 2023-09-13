import { CartItem } from './Component/CartItem'
import {
  ConfirmButton,
  OrderDetails,
  ProductsCartContainer,
  TotalOrder,
} from './styles'

export const ProductsCart = () => {
  return (
    <ProductsCartContainer>
      <CartItem />
      <CartItem />

      <OrderDetails>
        <p>Total de itens</p>
        <p>R$ 29,70</p>
      </OrderDetails>

      <OrderDetails>
        <p>Entrega</p>
        <p>R$ 3.50</p>
      </OrderDetails>

      <TotalOrder>
        <h4>Total</h4>
        <p>R$ 33,20</p>
      </TotalOrder>

      <ConfirmButton>Confirmar Pedido</ConfirmButton>
    </ProductsCartContainer>
  )
}
