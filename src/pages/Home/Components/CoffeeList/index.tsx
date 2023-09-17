import { CoffeeListContainer, CoffeeListStyles } from './styles'
import { ProductCard } from '../../../../components/ProductCard'
import coffeeDataList from '../../../../Data/coffeeData'

export function CoffeeList() {
  return (
    <CoffeeListStyles>
      <h2>Nossos cafés</h2>

      <CoffeeListContainer>
        {coffeeDataList.map((coffee) => (
          <ProductCard data={coffee} key={coffee.id} />
        ))}
      </CoffeeListContainer>
    </CoffeeListStyles>
  )
}
