import {
  CartButton,
  HeaderContainer,
  UserActions,
  UserLocation,
} from './styles'

import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Coffee Delivery app Logo"
        title="Coffee Delivery app"
      ></img>

      <UserActions>
        <UserLocation>
          <MapPin size={22} weight="fill" />
          <span> Porto Alegre</span>
        </UserLocation>

        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </UserActions>
    </HeaderContainer>
  )
}
