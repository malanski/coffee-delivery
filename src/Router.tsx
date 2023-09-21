import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { OrderProducts } from './pages/OrderProduct'
import { OrderSuccess } from './pages/OrderSuccess'
import { InvalidRouter } from './components/InvalidRoutes'
import { useContext } from 'react'
import { ShoppingContext } from './context/ShoppingContext'

export function Router() {
  const { dataFormShopping } = useContext(ShoppingContext)
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order-products" element={<OrderProducts />} />
        <Route
          path="/order-success"
          element={dataFormShopping ? <OrderSuccess /> : <InvalidRouter />}
        />

        <Route path="*" element={<InvalidRouter />} />
      </Route>
    </Routes>
  )
}
