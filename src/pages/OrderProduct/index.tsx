import { useForm, SubmitHandler } from 'react-hook-form'
import { DeliveryAddress } from './Components/DeliveryAddress'
import { PaymentMethods } from './Components/PaymentMethods'
import { ProductsCart } from './Components/ProductsCart'
import { OrderContainer, OrderUserData, Subtitle } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IDataForm } from '../../@types/interfaces'

export const DeliveryFormValidationSchema = zod.z.object({
  zipCode: zod.z
    .number({ invalid_type_error: 'O CEP deve conter apenas números' })
    .min(9, 'O cep deve conter nove dígitos no mínimo')
    .max(11, 'O cep deve conter onze dígitos no máximo'),

  streetName: zod.z
    .string()
    .min(4, 'O mome da rua deve conter pelo menos 4 caracteres'),

  streetNumber: zod.z.number({
    invalid_type_error: 'O número da rua deve conter apenas números',
  }),
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
  const { handleSubmit, register, formState } = useForm<IDataForm>({
    resolver: zodResolver(DeliveryFormValidationSchema),
  })
  const onSubmit: SubmitHandler<IDataForm> = (data) => {
    console.log(data)
  }
  // console.log(formState.errors)
  return (
    <OrderContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <OrderUserData>
          <Subtitle>Complete seu pedido</Subtitle>

          <DeliveryAddress register={register} formState={formState} />
          <PaymentMethods />
        </OrderUserData>

        <OrderUserData>
          <Subtitle>Cafés selecionados</Subtitle>
          <ProductsCart onSubmit={handleSubmit(onSubmit)} />
        </OrderUserData>
      </form>
    </OrderContainer>
  )
}
