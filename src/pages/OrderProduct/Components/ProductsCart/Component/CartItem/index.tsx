import {
  CartItemContainer,
  Divider,
  ItemContainer,
  ItemOptions,
  ItemQuantity,
  Price,
  QuantityButton,
  TrashButton,
} from './styles'
import expresso from '../../../../../../assets/products_icon/expresso.png'
import { Minus, Plus, Trash } from 'phosphor-react'

export const CartItem = () => {
  return (
    <>
      <CartItemContainer>
        <ItemContainer>
          <img src={expresso} alt="Foto de um café expresso" />

          <div>
            <p>Expresso Tradicional</p>
            <ItemOptions>
              <ItemQuantity>
                <QuantityButton>
                  <Minus size={14} />
                </QuantityButton>

                <span>1</span>

                <QuantityButton>
                  <Plus size={14} />
                </QuantityButton>
              </ItemQuantity>
              <TrashButton>
                <Trash />
                Remover
              </TrashButton>
            </ItemOptions>
          </div>
        </ItemContainer>
        <Price>R$ 9,90</Price>
      </CartItemContainer>
      <Divider />
    </>
  )
}
