import {
  CartButton,
  HeaderContainer,
  UserActions,
  UserLocation,
} from './styles'

import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
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

        <CartButton>
          <ShoppingCart
            size={22}
            weight="fill"
            onClick={() => navigate('/order-products')}
          />
        </CartButton>
      </UserActions>
    </HeaderContainer>
  )
}
