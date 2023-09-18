import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoppingProvider } from './context/ShoppingContext'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingProvider>
          <Router />
        </ShoppingProvider>
      </BrowserRouter>

      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
