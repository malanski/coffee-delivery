import { styled } from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
  padding: 1rem;
  @media (max-width: 1050px) {
    flex-direction: column-reverse;
  }
`

export const OrderUserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Subtitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
`

export const OrderComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.base['base-card']};
  width: 640px;
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
interface IOrderComponentsHeader {
  colorSvg: string
}
export const OrderComponentsHeader = styled.div<IOrderComponentsHeader>`
  display: flex;
  border-radius: 0.6rem;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.colorSvg};
  }
  @media (max-width: 696px) {
  }
`

export const OrderComponentsTitle = styled.div`
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
