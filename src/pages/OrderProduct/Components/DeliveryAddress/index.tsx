import { MapPinLine } from 'phosphor-react'
import {
  AddressInput,
  AddressInputContainer,
  ErrorMessage,
  InputSection,
  OptionalInput,
} from './styles'
import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'
import { useTheme } from 'styled-components'
import { FormState, UseFormRegister } from 'react-hook-form'
import { IDataForm } from '../../../../@types/interfaces'
import { useState } from 'react'

export const DeliveryAddress = ({
  register,
  formState,
}: {
  register: UseFormRegister<IDataForm>
  formState: FormState<IDataForm>
}) => {
  const theme = useTheme()
  const errors = formState.errors

  const [dataComplement, setDataComplement] = useState('')
  return (
    <OrderComponentsContainer>
      <OrderComponentsHeader $colorsvg={theme.product.purple}>
        <MapPinLine size={22} />

        <OrderComponentsTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </OrderComponentsTitle>
      </OrderComponentsHeader>

      <AddressInputContainer>
        <AddressInput
          required
          placeholder="CEP"
          width="38%"
          {...register('zipCode')}
        ></AddressInput>
        {errors?.zipCode && (
          <ErrorMessage>CEP inválido. {errors.zipCode.message}</ErrorMessage>
        )}

        <AddressInput
          placeholder="Rua"
          {...register('streetName')}
        ></AddressInput>
        {errors?.streetName && (
          <ErrorMessage>Rua inválida. {errors.streetName.message}</ErrorMessage>
        )}

        <InputSection $direction={errors?.streetNumber ? 'column' : 'row'}>
          <AddressInput
            required
            placeholder="Número"
            width="38%"
            {...register('streetNumber')}
          ></AddressInput>
          {errors?.streetNumber && (
            <ErrorMessage>
              Número da rua inválido. {errors.streetNumber.message}
            </ErrorMessage>
          )}

          <AddressInput
            placeholder="Complemento (Opcional)"
            width="100%"
            {...register('complement')}
            onChange={(e) => setDataComplement(e.target.value)}
          />
          {dataComplement.length === 0 && (
            <OptionalInput>Opcional</OptionalInput>
          )}
        </InputSection>

        <InputSection $direction={errors?.district ? 'column' : 'row'}>
          <AddressInput
            required
            placeholder="Bairro"
            width="38%"
            {...register('district')}
          ></AddressInput>
          {errors?.district && (
            <ErrorMessage>
              Bairro inválido. {errors.district.message}
            </ErrorMessage>
          )}

          <InputSection
            $direction={errors?.city || errors?.county ? 'column' : 'row'}
          >
            <AddressInput
              required
              placeholder="Cidade"
              width="75%"
              {...register('city')}
            ></AddressInput>
            {errors?.city && (
              <ErrorMessage>
                Cidade inválida. {errors.city.message}
              </ErrorMessage>
            )}

            <AddressInput
              placeholder="UF"
              width="25%"
              {...register('county')}
            ></AddressInput>
            {errors?.county && (
              <ErrorMessage>
                Estado UF inválido. {errors.county.message}
              </ErrorMessage>
            )}
          </InputSection>
        </InputSection>
      </AddressInputContainer>
    </OrderComponentsContainer>
  )
}
