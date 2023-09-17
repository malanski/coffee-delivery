import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'
import { useTheme } from 'styled-components'
import { PaymentButtonContainer, PaymentButtons } from './styles'

export const PaymentMethods = () => {
  const theme = useTheme()

  return (
    <OrderComponentsContainer>
      <OrderComponentsHeader $colorsvg={theme.product.purple}>
        <CurrencyDollar size={22} />

        <OrderComponentsTitle>
          <h3>Formas de pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </OrderComponentsTitle>
      </OrderComponentsHeader>

      <PaymentButtonContainer>
        <PaymentButtons>
          <CreditCard size={16} />
          Cartão de Crédito
        </PaymentButtons>
        <PaymentButtons>
          <Bank size={16} />
          Cartão de Débito
        </PaymentButtons>
        <PaymentButtons>
          <Money size={16} />
          Dinheiro
        </PaymentButtons>
      </PaymentButtonContainer>
    </OrderComponentsContainer>
  )
}
