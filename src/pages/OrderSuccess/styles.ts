import { styled } from 'styled-components'

export const SuccessPage = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
`

export const SuccessHeader = styled.div`
  margin-bottom: 4rem;
  h2 {
    font-family: Baloo 2;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme.product['yellow-dark']};
  }
`

export const OrderSuccessInfo = styled.div`
  display: flex;
  max-width: 52.6rem;
  padding: 4rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  border-radius: 6px 36px;
  border: 1px solid #dbac2c;
  @media (max-width: 950px) {
    width: 100%;
  }
`
interface IOrderSuccessData {
  background: string
}
export const OrderSuccessData = styled.div<IOrderSuccessData>`
  display: flex;
  gap: 1.2rem;
  width: 46.6rem;

  span {
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.product['purple-light']};
    background: ${(props) => props.background};
  }
  p {
    line-height: 130%;
    color: ${(props) => props.theme.base['base-text']};
    max-width: 31rem;
  }
`
export const SuccessIllustration = styled.img`
  max-width: 43.6rem;
`
