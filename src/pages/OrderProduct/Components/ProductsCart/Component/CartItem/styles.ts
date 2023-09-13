import { styled } from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    display: flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1200px) {
    img {
      width: 52px;
      height: 52px;
    }
  }
  @media (max-width: 399px) {
    img {
      width: 48px;
      height: 48px;
    }
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme.base['base-subtitle']};
    line-height: 130%;
  }
`

export const ItemOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.8rem;
`

export const ItemQuantity = styled.div`
  display: flex;
  height: 3.2rem;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 6px;
  width: 7.2rem;
  background: ${(props) => props.theme.base['base-button']};
  span {
    font-size: 16px;
    text-align: center;
    /* line-height: 130%; */
  }
`
export const QuantityButton = styled.button`
  color: ${(props) => props.theme.product.purple};
  cursor: pointer;
  border: none;
  background: transparent;
`

export const TrashButton = styled.button`
  color: ${(props) => props.theme.base['base-text']};
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.base['base-button']};
  /* width: 7.2rem; */
  height: 3.2rem;
  display: flex;
  padding: 0px 0.8rem;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.4rem;
  border-radius: 6px;
  /* line-height: 160%; */

  svg {
    color: ${(props) => props.theme.product.purple};
  }
`
export const Price = styled.p`
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme.base['base-text']};
`

export const Divider = styled.div`
  border-top: 1px solid ${(props) => props.theme.base['base-button']};
  margin: 2.4rem 0;
  align-self: stretch;
`
