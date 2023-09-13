import { MapPinLine } from 'phosphor-react'
import { AddressInput, AddressInputContainer, InputSection } from './styles'
import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'
import { useTheme } from 'styled-components'

export const DeliveryAddress = () => {
  const theme = useTheme()

  return (
    <OrderComponentsContainer>
      <OrderComponentsHeader colorSvg={theme.product.purple}>
        <MapPinLine size={22} />

        <OrderComponentsTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </OrderComponentsTitle>
      </OrderComponentsHeader>

      <AddressInputContainer>
        <AddressInput placeholder="CEP" width="38%"></AddressInput>
        <AddressInput placeholder="Rua"></AddressInput>

        <InputSection>
          <AddressInput placeholder="Número" width="38%"></AddressInput>
          <AddressInput
            placeholder="Complemento (Opcional)"
            width="100%"
          ></AddressInput>
        </InputSection>

        <InputSection>
          <AddressInput placeholder="Bairro" width="38%"></AddressInput>
          <div>
            <AddressInput placeholder="Cidade" width="75%"></AddressInput>
            <AddressInput placeholder="UF" width="25%"></AddressInput>
          </div>
        </InputSection>
      </AddressInputContainer>
    </OrderComponentsContainer>
  )
}
