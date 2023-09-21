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
