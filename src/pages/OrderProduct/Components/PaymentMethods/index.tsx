import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'
import { useTheme } from 'styled-components'
import { PaymentButtonContainer } from './styles'
import { PaymentButtons } from './Components/PaymentButtons'
import { PaymentMethodType } from '../../../../@types/interfaces'
import { useContext } from 'react'
import { ShoppingContext } from '../../../../context/ShoppingContext'

export const PaymentMethods = () => {
  const theme = useTheme()
  const { setSelectedPayment, selectedPayment } = useContext(ShoppingContext)
  const handlePaymentClick = (paymentMethod: PaymentMethodType) => {
    setSelectedPayment(paymentMethod)
    console.log(paymentMethod)
  }
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
        <PaymentButtons
          onClick={() => handlePaymentClick('Cartão de Crédito')}
          $isSelected={selectedPayment === 'Cartão de Crédito'}
        >
          <CreditCard size={16} />
          Cartão de Crédito
        </PaymentButtons>
        <PaymentButtons
          onClick={() => handlePaymentClick('Cartão de Debito')}
          $isSelected={selectedPayment === 'Cartão de Debito'}
        >
          <Bank size={16} />
          Cartão de Débito
        </PaymentButtons>
        <PaymentButtons
          onClick={() => handlePaymentClick('Dinheiro')}
          $isSelected={selectedPayment === 'Dinheiro'}
        >
          <Money size={16} />
          Dinheiro
        </PaymentButtons>
      </PaymentButtonContainer>
    </OrderComponentsContainer>
  )
}
