import { styled } from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 3.2rem;
  padding: 1rem;
  @media (max-width: 1200px) {
    flex-direction: column;
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
  width: 64rem;
  padding: 4rem;
  border-radius: 6px;
  gap: 3.2rem;
  @media (max-width: 1200px) {
    width: 100%;
    margin: auto;
    padding: 2rem;
  }
  @media (max-width: 1050px) {
    padding: 1rem;
  }
  @media (max-width: 696px) {
    padding: 0.8rem;
  }
  @media (max-width: 375px) {
    padding: 0.5rem;
  }
`
interface IOrderComponentsHeader {
  $colorsvg: string
}

export const OrderComponentsHeader = styled.div<IOrderComponentsHeader>`
  display: flex;
  border-radius: 0.6rem;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.$colorsvg};
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
