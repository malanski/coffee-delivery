import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoppingContextProvider } from './context/ShoppingContext'

export const App = () => {
  return (
    <ShoppingContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyled />
      </ThemeProvider>
    </ShoppingContextProvider>
  )
}

export default App
