import { styled } from 'styled-components'

export const PaymentButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.2rem;
  @media (max-width: 660px) {
    flex-direction: column;
    align-items: start;
    /* justify-content: flex-start; */
  }
`
export const PaymentButtons = styled.button`
  display: flex;
  padding: 1.6rem;
  align-items: center;
  gap: 1.2rem;
  /* border: 1px solid var(--brand-purple, #8047F8); */
  background: ${(props) => props.theme.product['purple-light']};
  color: ${(props) => props.theme.base['base-text']};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 33%;
  @media (max-width: 660px) {
    width: 50%;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
  @media (max-width: 420px) {
    width: 80%;
  }
`
