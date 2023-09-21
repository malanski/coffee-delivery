import { useForm, SubmitHandler } from 'react-hook-form'
import { DeliveryAddress } from './Components/DeliveryAddress'
import { PaymentMethods } from './Components/PaymentMethods'
import { ProductsCart } from './Components/ProductsCart'
import { OrderContainer, OrderUserData, Subtitle } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IDataForm } from '../../@types/interfaces'
import { ShoppingContext } from '../../context/ShoppingContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

export const DeliveryFormValidationSchema = zod.z.object({
  zipCode: zod.z
    .string()
    .min(8, 'O cep deve conter oito dígitos no mínimo')
    .max(9, 'O cep deve conter nove dígitos no máximo'),

  streetName: zod.z
    .string()
    .min(4, 'O mome da rua deve conter pelo menos 4 caracteres'),

  streetNumber: zod.z.string(),
  complement: zod.z.string(),
  district: zod.z
    .string()
    .min(3, 'O bairro deve conter pelo menos 3 caracteres'),

  city: zod.z.string().min(3, 'Cidade deve conter pelo menos 3 caracteres'),

  county: zod.z
    .string()
    .min(2, 'UF deve ter dois caracteres pelo menos.')
    .max(3, 'UF deve conter apenas 3 caracteres'),
})

export const OrderProducts = () => {
  const { register, handleSubmit, formState } = useForm<IDataForm>({
    resolver: zodResolver(DeliveryFormValidationSchema),
  })

  const { selectedPayment, setDataFormShopping } = useContext(ShoppingContext)
  const navigate = useNavigate()

  const handleCreateNewCycle: SubmitHandler<IDataForm> = (data) => {
    if (selectedPayment) {
      data.paymentMethod = selectedPayment

      setDataFormShopping(data)
      navigate('/order-success')
    }
  }
  return (
    <OrderContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <OrderUserData>
          <Subtitle>Complete seu pedido</Subtitle>

          <DeliveryAddress register={register} formState={formState} />
          <PaymentMethods />
        </OrderUserData>

        <OrderUserData>
          <Subtitle>Cafés selecionados</Subtitle>
          <ProductsCart />
        </OrderUserData>
      </form>
    </OrderContainer>
  )
}
