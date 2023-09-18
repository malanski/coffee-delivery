import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import {
  CoffeeCard,
  CoffeeInfo,
  OptionsStyle,
  BuyActions,
  BuyQuantity,
  BuyButton,
  QuantityButton,
} from './styles'
import { formatPrice } from '../../utils/formatPrice'
import { ShoppingContext } from '../../context/ShoppingContext'

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
  const shoppingContext = useContext(ShoppingContext)

  // Verifique se shoppingContext não é nulo antes de acessar suas propriedades
  const addToCart = shoppingContext?.addToCart
  const updateQuantity = shoppingContext?.updateQuantity

  const products = {
    id,
    iconSrc,
    name,
    options,
    description,
    price,
    qnty: qntyProductCard,
  }

  const getDataProduct = () => {
    addToCart?.(products) // Use o operador de chamada opcional para evitar erros se addToCart for nulo
  }

  const lessProducts = () => {
    if (qntyProductCard > 1) {
      const newQnty = qntyProductCard - 1
      setQntyProductCard(newQnty)
      updateQuantity?.(id, newQnty) // Use o operador de chamada opcional para evitar erros
    }
  }

  const moreProducts = () => {
    const newQnty = qntyProductCard + 1
    setQntyProductCard(newQnty)
    updateQuantity?.(id, newQnty) // Use o operador de chamada opcional para evitar erros
  }

  useEffect(() => {
    if (shoppingContext) {
      const productInCart = shoppingContext.cart.find((item) => item.id === id)
      if (productInCart) {
        setQntyProductCard(productInCart.quantity)
      }
    }
  }, [shoppingContext, id])
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
