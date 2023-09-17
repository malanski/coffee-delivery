import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
// import { ShoppingContextProvider } from './context/ShoppingContext'
import { ShoppingProvider } from './context/ShoppingContext2'

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
