import {
  CartAmount,
  CartButton,
  HeaderContainer,
  UserActions,
  UserLocation,
} from './styles'

import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'

export function Header() {
  // Desestrutura o objeto do contexto
  const { cart = [] } = useContext(ShoppingContext) || {}
  const navigate = useNavigate()

  useEffect(() => {
    // Use cart.length para obter o número de itens no carrinho
    console.log(cart.length)
  }, [cart]) // Execute o efeito sempre que o carrinho for atualizado

  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Coffee Delivery app Logo"
        title="Coffee Delivery app"
        onClick={() => navigate('/')}
      ></img>

      <UserActions>
        <UserLocation>
          <MapPin size={22} weight="fill" />
          <span> Porto Alegre</span>
        </UserLocation>

        <CartButton onClick={() => navigate('/order-products')}>
          <ShoppingCart size={22} weight="fill" />

          {cart.length > 0 && <CartAmount>{cart.length}</CartAmount>}
        </CartButton>
      </UserActions>
    </HeaderContainer>
  )
}
