import { Badges, IconBadge, IntroContainer, IntroTitles, TitlesContainer } from "./styles"
import { Package, ShoppingCart, Coffee, Timer } from 'phosphor-react';
import CoffeeImg from '../../../../assets/Imagem.png'
import { useTheme } from 'styled-components'; 

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <TitlesContainer>
        <IntroTitles>
          <h2>
            Encontre o café perfeito<br></br>
            para qualquer hora do dia
          </h2>
          <h4>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </h4>
        </IntroTitles>

        <Badges>
          <IconBadge background={theme.product['yellow-dark']}>
            <ShoppingCart size={16} weight="fill" />
            <span>Compra simples e segura</span>
          </IconBadge>
          <IconBadge background={theme.base['base-text']}>
            <Package size={16} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </IconBadge>
          <IconBadge background={theme.product['yellow']}>
            <Timer size={16} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </IconBadge>
          <IconBadge background={theme.product['purple']}>
            <Coffee size={16} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </IconBadge>
        </Badges>
      </TitlesContainer>

      <img
        src={CoffeeImg}
        alt="Coffee Delivery app Logo"
        title="Coffee Delivery app">
      </img>
    </IntroContainer>
  )
}