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

export const OptionalInput = styled.span`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 400;
  line-height: 130%;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${(props) => props.theme.base['base-label']};

  @media (max-width: 573px) {
    top: 7rem;
  }
`
export const ErrorMessage = styled.span`
  color: #c4002e;
  text-align: justify;
  width: 80%;
  margin-top: -0.8rem;
  font-size: 1.4rem;
  margin-left: 0.5rem;
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
interface IErrorsFlexProps {
  $direction?: 'column' | 'row'
}
export const InputSection = styled.div<IErrorsFlexProps>`
  display: flex;
  gap: 1.2rem;
  flex-direction: ${({ $direction }) => $direction};
  position: relative;
  div {
    display: flex;
    gap: 1.2rem;
  }
  @media (max-width: 572px) {
    flex-direction: column;
  }
`
