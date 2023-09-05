import {
  BuyActions,
  BuyButton,
  BuyQuantity,
  CoffeeCard,
  CoffeeInfo,
  CoffeeListContainer,
  CoffeeListStyles,
  OptionsStyle,
} from './style'
import CoffeeDataList from '../../../../Data/coffeeData'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function CoffeeList() {
  const theme = useTheme()

  return (
    <CoffeeListStyles>
      <h2>Nossos cafés</h2>
      <CoffeeListContainer>
        {CoffeeDataList.map((coffee, index) => (
          <CoffeeCard key={index}>
            <img src={`${coffee.iconSrc}`} alt={coffee.name}></img>

            <CoffeeInfo>
              <OptionsStyle>
                {coffee.options.map((option, index) => (
                  <button key={index}>{option}</button>
                ))}
              </OptionsStyle>

              <h3>{coffee.name}</h3>
              <h4>{coffee.description}</h4>
            </CoffeeInfo>

            <BuyActions>
              <h6 title="Preço atual">
                R$ <span>9,90</span>
              </h6>

              <BuyQuantity>
                <button title="Remover">
                  <Minus size={14} />
                </button>
                <span title="Unidades">1</span>
                <button title="Adicionar">
                  <Plus size={14} />
                </button>
              </BuyQuantity>

              <BuyButton
                title="Comprar"
                background={theme.product['purple-dark']}
              >
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </BuyButton>
            </BuyActions>
          </CoffeeCard>
        ))}
      </CoffeeListContainer>
    </CoffeeListStyles>
  )
}
