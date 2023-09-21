import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  OrderSuccessData,
  OrderSuccessInfo,
  SuccessContainer,
  SuccessHeader,
  SuccessIllustration,
  SuccessPage,
} from './styles'
import { useTheme } from 'styled-components'

import illustration from '../../assets/Illustration.png'
import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'

export const OrderSuccess = () => {
  const theme = useTheme()

  const { dataFormShopping } = useContext(ShoppingContext)

  return (
    <>
      <SuccessPage>
        <SuccessContainer>
          <SuccessHeader>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </SuccessHeader>

          <OrderSuccessInfo>
            <OrderSuccessData $background={theme.product['purple-dark']}>
              <span>
                <MapPin size={16} weight="fill" />
              </span>
              <p>
                Entrega em{' '}
                <b>
                  {dataFormShopping?.streetName},{' '}
                  {dataFormShopping?.streetNumber}
                </b>{' '}
                {dataFormShopping?.county} - {dataFormShopping?.city}, RS
              </p>
            </OrderSuccessData>

            <OrderSuccessData $background={theme.product.yellow}>
              <span>
                <Clock size={16} weight="fill" />
              </span>
              <p>
                Previsão de entrega <br />
                <b>20 min - 30 min</b>
              </p>
            </OrderSuccessData>

            <OrderSuccessData $background={theme.product['yellow-dark']}>
              <span>
                <CurrencyDollar size={16} />
              </span>
              <p>
                Pagamento na entrega <br />
                <b>{dataFormShopping?.paymentMethod}</b>
              </p>
            </OrderSuccessData>
          </OrderSuccessInfo>
        </SuccessContainer>
        <SuccessIllustration src={illustration} alt="Algo" />
      </SuccessPage>
    </>
  )
}
