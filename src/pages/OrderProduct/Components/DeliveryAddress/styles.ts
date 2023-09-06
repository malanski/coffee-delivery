import { styled } from 'styled-components'

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.base['base-card']};
  width: 560px;
  padding: 4rem;
  border-radius: 0.6rem;
  gap: 3.2rem;

  @media (max-width: 696px) {
    width: 95vw;
    padding: 2.4rem;
  }
  @media (max-width: 375px) {
    padding: 1.2rem;
  }
`
export const DeliveryHeader = styled.div`
  display: flex;
  border-radius: 0.6rem;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme.product['yellow-dark']};
  }
  @media (max-width: 696px) {
  }
`
export const DeliveryTitle = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  line-height: 130%;
  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.base['base-text']};
  }
`
interface IAddressInputProps {
  width?: string
}
export const AddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
`
export const AddressInput = styled.input<IAddressInputProps>`
  background: ${(props) => props.theme.base['base-input']};
  color: ${(props) => props.theme.base['base-label']};
  font-size: 1.4rem;
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme.base['base-button']};
  padding: 1.2rem;
  width: ${(props) => props.width};
  height: 4.2rem;
`

export const InputSection = styled.div`
  display: flex;
  gap: 1.2rem;

  div {
    display: flex;
    gap: 1.2rem;
  }
  @media (max-width: 572px) {
    flex-direction: column;
  }
`
