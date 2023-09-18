import styled from 'styled-components'

export const CoffeeListStyles = styled.section`
  width: 100%;
  width: calc(100% + 3.2rem);

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

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
export const CoffeeListContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-around; */
  /* justify-content: space-between; */
  justify-content: flex-start;
  align-items: start;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-right: -3.2rem;
  /* margin-left: -3.2rem; */
  /* width: calc(100% + 3.2rem); */
  width: 100%;

  @media (max-width: 1280px) {
    /* justify-content: ; */
    /* gap: 0; */
    /* margin: auto; */
    /* width: 90%; */
  }
`
