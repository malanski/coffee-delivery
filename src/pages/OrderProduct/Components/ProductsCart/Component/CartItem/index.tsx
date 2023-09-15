import { Minus, Plus, Trash } from 'phosphor-react'

import { IProductsDataCart } from '../../../../../../@types/interfaces'

import {
  CartItemContainer,
  ItemContainer,
  ItemOptions,
  ItemQuantity,
  QuantityButton,
  TrashButton,
  Price,
  Divider,
} from './styles'
import { formatPrice } from '../../../../../../utils/formatPrice'
import { useContext, useState } from 'react'
import { ShoppingContext } from '../../../../../../context/ShoppingContext'

export const CartItem = (props: IProductsDataCart) => {
  const { id, name, iconSrc, price, qnty } = props
  const { moreQntyProduct, lessQntyProduct, removeProductCart } =
    useContext(ShoppingContext)

  const [qntyProductCart, setQntyProductCart] = useState(qnty)

  const moreProducts = () => {
    const newQnty = moreQntyProduct(qntyProductCart, price)

    setQntyProductCart(newQnty)
  }

  const lessProducts = () => {
    const newQnty = lessQntyProduct(qntyProductCart, price)

    setQntyProductCart(newQnty)
  }

  const removeProduct = () => {
    removeProductCart(id)
  }

  const multiplyPrice = price * qntyProductCart

  const priceFormat = formatPrice(multiplyPrice)

  return (
    <>
      <CartItemContainer>
        <ItemContainer>
          <img src={iconSrc} alt="Café Expresso" />
          <div>
            <p>{name}</p>
            <ItemOptions>
              <ItemQuantity>
                <QuantityButton onClick={lessProducts}>
                  <Minus size={14} />
                </QuantityButton>

                <span>{qntyProductCart}</span>

                <QuantityButton onClick={moreProducts}>
                  <Plus size={14} />
                </QuantityButton>
              </ItemQuantity>

              <TrashButton onClick={removeProduct}>
                <Trash size={16} />
                Remover
              </TrashButton>
            </ItemOptions>
          </div>
        </ItemContainer>

        <Price>R$ {priceFormat}</Price>
      </CartItemContainer>
      <Divider></Divider>
    </>
  )
}
