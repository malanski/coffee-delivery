import { MapPinLine } from 'phosphor-react'
import { AddressInput, AddressInputContainer, InputSection } from './styles'
import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'
import { useTheme } from 'styled-components'
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form'
import { IDataForm } from '../../../../@types/interfaces'

export const DeliveryAddress = ({
  register,
  formState,
}: {
  register: UseFormRegister<IDataForm>
  formState: FormState<FieldValues>
}) => {
  const theme = useTheme()

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
        {formState.errors?.zipCode &&
          typeof formState.errors.zipCode.message === 'string' && (
            <span>CEP inválido. {formState.errors.zipCode.message}</span>
          )}

        <AddressInput
          placeholder="Rua"
          {...register('streetName')}
        ></AddressInput>
        {formState.errors?.streetName &&
          typeof formState.errors.streetName.message === 'string' && (
            <span>Rua inválida. {formState.errors.streetName.message}</span>
          )}

        <InputSection>
          <AddressInput
            required
            placeholder="Número"
            width="38%"
            {...register('streetNumber')}
          ></AddressInput>
          {formState.errors?.streetNumber &&
            typeof formState.errors.streetNumber.message === 'string' && (
              <span>
                Número da rua inválido. {formState.errors.streetNumber.message}
              </span>
            )}

          <AddressInput
            placeholder="Complemento (Opcional)"
            width="100%"
            {...register('complement')}
          ></AddressInput>
        </InputSection>

        <InputSection>
          <AddressInput
            required
            placeholder="Bairro"
            width="38%"
            {...register('district')}
          ></AddressInput>
          {formState.errors?.district &&
            typeof formState.errors.district.message === 'string' && (
              <span>Bairro inválido. {formState.errors.district.message}</span>
            )}

          <div>
            <AddressInput
              required
              placeholder="Cidade"
              width="75%"
              {...register('city')}
            ></AddressInput>
            {formState.errors?.city &&
              typeof formState.errors.city.message === 'string' && (
                <span>Cidade inválida. {formState.errors.city.message}</span>
              )}

            <AddressInput
              placeholder="UF"
              width="25%"
              {...register('county')}
            ></AddressInput>
            {formState.errors?.county &&
              typeof formState.errors.county.message === 'string' && (
                <span>
                  Estado UF inválido. {formState.errors.county.message}
                </span>
              )}
          </div>
        </InputSection>
      </AddressInputContainer>
    </OrderComponentsContainer>
  )
}
