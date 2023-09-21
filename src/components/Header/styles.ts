import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 3.2rem 0;
  margin-bottom: 0.4rem;
  /* position: relative; */
  img {
    width: 8.5rem;
    height: 4rem;
  }

  @media (max-width: 1150px) {
    img {
      width: 8.5rem;
      height: 4rem;
    }
  }

  @media (max-width: 375px) {
    padding: 1.6rem 0;
    img {
      width: 7.5rem;
      height: 3rem;
    }
  }
`

export const UserActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  /* position: fixed;
  top: 0;
  right: 0; */
  @media (max-width: 375px) {
    gap: 0.6rem;
  }
`

export const UserLocation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  gap: 0.4rem;
  font-size: 1.4rem;
  background: ${(props) => props.theme.product['purple-light']};
  color: ${(props) => props.theme.product['purple-dark']};
  border-radius: 0.6rem;
  transition: all ease-in-out 600ms;

  &:hover {
    background: ${(props) => props.theme.product['purple-dark']};
    color: ${(props) => props.theme.product['purple-light']};
  }
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  gap: 0.4rem;
  font-size: 1.4rem;
  border: none;
  background: ${(props) => props.theme.product['yellow-light']};
  color: ${(props) => props.theme.product['yellow-dark']};
  border-radius: 0.6rem;
  transition: all ease-in-out 600ms;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.product.yellow};
    color: ${(props) => props.theme.product['yellow-light']};
  }
`
export const CartAmount = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.72px;
  color: ${(props) => props.theme.base.white};
  background: ${(props) => props.theme.product['yellow-dark']};
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8.345px;
  top: -8px;
  border-radius: 50%;
  @media (max-width: 399px) {
    right: -1px;
  }
`
