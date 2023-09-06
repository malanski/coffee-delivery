import styled from 'styled-components'

export const CoffeeListStyles = styled.section`
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
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  /* margin: 0 32rem; */
  /* max-width: 112rem; */
  @media (max-width: 740px) {
    /* margin: 0 4rem; */
    /* justify-content: space-around; */
  }
  @media (max-width: 480px) {
    /* margin: 0 2rem; */
    /* flex-wrap: wrap; */
  }
`
