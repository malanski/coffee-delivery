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
import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext2'

export function Header() {
  const { cart } = useContext(ShoppingContext)
  const navigate = useNavigate()

  const cartCount = cart.length

  console.log(cartCount)

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

          {cartCount > 0 && <CartAmount>{cartCount}</CartAmount>}
        </CartButton>
      </UserActions>
    </HeaderContainer>
  )
}
