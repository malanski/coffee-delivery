import { styled } from 'styled-components'

export const ProductsCartContainer = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  padding: 4rem;
  border-radius: 0.6rem 4rem;
  width: 48rem;
  /* min-height: 100%; */
  @media (max-width: 1200px) {
    border-radius: 6px;
    width: 100%;
  }
  @media (max-width: 440px) {
    padding: 2rem;
  }
  @media (max-width: 399px) {
    padding: 1rem;
  }
  @media (max-width: 373px) {
    padding: 0.5rem;
  }
`
export const OrderDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.base['base-text']};
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`

export const TotalOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.base['base-subtitle']};
  font-size: 2rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 2.4rem;
`
export const EmptyCart = styled.h3`
  font-size: 700;
  color: ${(props) => props.theme.base['base-text']};
  text-align: center;
  width: 100%;
  /* padding: 6.4rem 0; */
  margin-top: 9rem;
  margin-bottom: 13rem;
  a {
    color: ${(props) => props.theme.product['yellow-dark']};
    cursor: pointer;
  }
`
export const ConfirmButton = styled.button`
  display: flex;
  padding: 1.2rem 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  background: ${(props) => props.theme.product.yellow};
  border-radius: 6px;
  color: ${(props) => props.theme.base.white};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  border: none;
  width: 100%;
  transition: ease-out 800ms;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.product['yellow-dark']};
    transition: ease-in 200ms;
  }
`
