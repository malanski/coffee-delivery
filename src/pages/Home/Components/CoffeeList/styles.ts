import styled from 'styled-components'

export const CoffeeListStyles = styled.section`
  width: 100%;
  h2 {
    font-family: 'Baloo 2';
    max-width: 25.6rem;
    font-size: 3.2rem;
    margin: 3.2rem 0;
  }
  @media (max-width: 740px) {
    h2 {
      margin: 3.2rem 8rem;
    }
  }
  @media (max-width: 480px) {
    h2 {
      margin: 3.2rem 4rem;
    }
  }
`
export const CoffeeListContainer = styled.section`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-around; */
  align-items: center;
  flex-wrap: wrap;
  /* gap: 3.2rem; */

  width: 100%;

  @media (max-width: 1280px) {
    /* justify-content: ; */
    /* gap: 0; */
    /* margin: auto; */
    /* width: 90%; */
  }
`
