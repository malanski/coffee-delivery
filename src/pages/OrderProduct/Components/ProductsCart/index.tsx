import { CartItem } from './Component/CartItem'
import {
  ConfirmButton,
  OrderDetails,
  ProductsCartContainer,
  TotalOrder,
} from './styles'
import { useNavigate } from 'react-router-dom'

export const ProductsCart = () => {
  const navigate = useNavigate()
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

      <ConfirmButton onClick={() => navigate('/order-success')}>
        Confirmar Pedido
      </ConfirmButton>
    </ProductsCartContainer>
  )
}
