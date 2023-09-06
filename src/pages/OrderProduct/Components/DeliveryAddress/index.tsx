import { MapPinLine } from 'phosphor-react'
import {
  AddressInput,
  AddressInputContainer,
  DeliveryContainer,
  DeliveryHeader,
  DeliveryTitle,
  InputSection,
} from './styles'

export const DeliveryAddress = () => {
  return (
    <DeliveryContainer>
      <DeliveryHeader>
        <MapPinLine size={22} />

        <DeliveryTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </DeliveryTitle>
      </DeliveryHeader>

      <AddressInputContainer>
        <AddressInput placeholder="CEP" width="38%"></AddressInput>
        <AddressInput placeholder="Rua"></AddressInput>

        <InputSection>
          <AddressInput placeholder="Número" width="38%"></AddressInput>
          <AddressInput placeholder="Complemento" width="100%"></AddressInput>
        </InputSection>

        <InputSection>
          <AddressInput placeholder="Bairro" width="38%"></AddressInput>
          <div>
            <AddressInput placeholder="Cidade" width="75%"></AddressInput>
            <AddressInput placeholder="UF" width="25%"></AddressInput>
          </div>
        </InputSection>
      </AddressInputContainer>
    </DeliveryContainer>
  )
}
