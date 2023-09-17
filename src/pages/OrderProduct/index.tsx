import { DeliveryAddress } from './Components/DeliveryAddress'
import { PaymentMethods } from './Components/PaymentMethods'
import { ProductsCart } from './Components/ProductsCart'
import { OrderContainer, OrderUserData, Subtitle } from './styles'

export const OrderProducts = () => {
  return (
    <OrderContainer>
      <OrderUserData>
        <Subtitle>Complete seu pedido</Subtitle>
        <DeliveryAddress />
        <PaymentMethods />
      </OrderUserData>

      <OrderUserData>
        <Subtitle>Cafés selecionados</Subtitle>
        <ProductsCart />
      </OrderUserData>
    </OrderContainer>
  )
}
