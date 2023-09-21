import { Minus, Plus, Trash } from 'phosphor-react'

// import { IProductsDataCart } from '../../../../../../@types/interfaces'

import {
  CartItemContainer,
  ItemContainer,
  ItemOptions,
  ItemQuantity,
  QuantityButton,
  TrashButton,
  Price,
  Divider,
  ItemOptionsContainer,
} from './styles'
import React, { useContext } from 'react'
import { ShoppingContext } from '../../../../../../context/ShoppingContext' // Importe o contexto
import { formatPrice } from '../../../../../../utils/formatPrice'

interface CartItemProps {
  id: number
  name: string
  price: number
  options: string[]
  iconSrc: string
  qnty: number
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  iconSrc,
  qnty,
}) => {
  const { updateQuantity, removeFromCart } = useContext(ShoppingContext) || {}

  const moreProducts = () => {
    updateQuantity(id, qnty + 1)
  }

  const lessProducts = () => {
    if (qnty > 1) {
      updateQuantity(id, qnty - 1)
    }
  }

  const removeProduct = () => {
    if (removeFromCart) {
      removeFromCart(id)
    }
  }
  const totalItem = price * qnty

  return (
    <>
      <CartItemContainer>
        <ItemContainer>
          <img
            src={iconSrc}
            alt={`Foto de um ${name}`}
            title={`Um delicioso ${name} pra você`}
          />
          <ItemOptionsContainer>
            <p>{name}</p>
            <ItemOptions>
              <ItemQuantity>
                <QuantityButton type="button" onClick={lessProducts}>
                  <Minus size={14} />
                </QuantityButton>

                <span>{qnty}</span>

                <QuantityButton type="button" onClick={moreProducts}>
                  <Plus size={14} />
                </QuantityButton>
              </ItemQuantity>

              <TrashButton onClick={removeProduct}>
                <Trash size={16} />
                Remover
              </TrashButton>
            </ItemOptions>
          </ItemOptionsContainer>
        </ItemContainer>

        <Price>R$ {formatPrice(totalItem)}</Price>
      </CartItemContainer>
      <Divider></Divider>
    </>
  )
}
