import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'

import {
  CoffeeCard,
  CoffeeInfo,
  OptionsStyle,
  BuyActions,
  BuyQuantity,
  BuyButton,
  QuantityButton,
} from './styles'
import { ShoppingContext } from '../../context/ShoppingContext'
import { formatPrice } from '../../utils/formatPrice'

export interface IProductCardProps {
  data: {
    id: number
    name: string
    description: string
    options: string[]
    iconSrc: string
    imgSrc?: string
    price: number
  }
}

export const ProductCard = (props: IProductCardProps) => {
  const [qntyProductCard, setQntyProductCard] = useState(1)

  const { id, iconSrc, name, options, description, price } = props.data
  const { setProductsToCart, moreQntyProduct, lessQntyProduct } =
    useContext(ShoppingContext)

  const products = {
    id,
    iconSrc,
    name,
    options,
    price,
    qnty: qntyProductCard,
  }

  const getDataProduct = () => {
    setProductsToCart(products)
  }

  const lessProducts = () => {
    const newQnty = lessQntyProduct(qntyProductCard, price)

    setQntyProductCard(newQnty)
  }

  const moreProducts = () => {
    const newQnty = moreQntyProduct(qntyProductCard, price)

    setQntyProductCard(newQnty)
  }

  const priceFormat = formatPrice(price)
  return (
    <CoffeeCard>
      <img src={`${iconSrc}`} alt={name}></img>

      <CoffeeInfo>
        <OptionsStyle>
          {options.map((option) => (
            <button key={option}>{option}</button>
          ))}
        </OptionsStyle>

        <h3>{name}</h3>
        <h4>{description}</h4>
      </CoffeeInfo>

      <BuyActions>
        <p title="Preço atual">
          R$ <span>{priceFormat}</span>
        </p>

        <BuyQuantity>
          <QuantityButton title="Remover" onClick={lessProducts}>
            <Minus size={14} />
          </QuantityButton>
          <span title="Unidades">{qntyProductCard}</span>
          <QuantityButton title="Adicionar" onClick={moreProducts}>
            <Plus size={14} />
          </QuantityButton>
        </BuyQuantity>

        <BuyButton title="Comprar" onClick={getDataProduct}>
          <ShoppingCart size={22} weight="fill" />
        </BuyButton>
      </BuyActions>
    </CoffeeCard>
  )
}
