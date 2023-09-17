import { styled } from 'styled-components'

interface IAddressInputProps {
  width?: string
}
export const AddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
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

  @media (max-width: 999px) {
    width: 50%;
  }
  @media (max-width: 712px) {
    width: 100%;
  }
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
