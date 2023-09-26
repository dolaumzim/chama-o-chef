import { Input } from '../Input';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Formik } from 'formik';
import {
  CityState,
  FormType,
  NumberComplement,
  NumberContainer,
  ComplementContainer,
  CityContainer,
  StateContainer,
  PageTitle,
  SubmitButton,
  AlreadySignedUp,
  AlreadySignedUpLink,
  StepButton,
  StepBack,
  CancelAddress
} from './styles.ts';
import { SignUpLocal } from '../../services/structure.ts';
import { useAddress } from '../../contexts/AddressContext.tsx';
import { getAddressRequest } from '../../services/Auth/getAddress.ts';
import { postSignUpRequest } from '../../services/Auth/postSignUp.ts';
import {
  SignUpStepAddressProps,
  dataSchema,
  emptyAddresses,
} from './structures.ts';
import { useState } from 'react';

export const SignUpStepAddress = ({ data, prev }: SignUpStepAddressProps) => {
  const [cepError, setCepError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const { addresses, setAddresses } = useAddress();
  const navigate = useNavigate();

  const handleSteps = (values: SignUpLocal) => {
    prev(values);
  };

  const handleZipCode = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setCepError(false);
      const response = await getAddressRequest(e.target.value);
      setAddresses(response);
      return response;
    } catch (error) {
      console.log(error);
      setCepError(true);
    }
  };

  const handleSignUp = async (values: SignUpLocal) => {
    try {
      setSignUpError(false);
      const response = await postSignUpRequest(values);
      console.log(response)
      setAddresses(emptyAddresses)
      if (response.status === 200) navigate('/login');
    } catch (error) {
      console.log(error);
      setSignUpError(true);
    }
  };

  return (
    <Formik<SignUpLocal>
      initialValues={data}
      onSubmit={handleSignUp}
      validationSchema={dataSchema}
    >
      {({ values, setFieldValue }) => (
        <FormType>
          <PageTitle>Cadastre-se</PageTitle>
          <Input
            type="text"
            name="addresses_attributes[0].zip_code"
            placeholder="CEP"
            maxLength={8}
            value={values.addresses_attributes && values.addresses_attributes[0].zip_code}
            onFocus={()=>{if(values.addresses_attributes===undefined) setFieldValue('addresses_attributes[0].zip_code', '')}}
            onChange={async(e:any)=> {
              setFieldValue('addresses_attributes[0].zip_code', e.target.value)
              if (e.target.value.length === 8) {
                const response = await handleZipCode(e);
                if (response) {
                  setFieldValue(
                    'addresses_attributes[0].city_id',
                    response.city_id
                  );
                  setFieldValue(
                    'addresses_attributes[0].latitude',
                    response.location.coordinates.latitude
                  );
                  setFieldValue(
                    'addresses_attributes[0].longitude',
                    response.location.coordinates.longitude
                  );
                  setFieldValue(
                    'addresses_attributes[0].public_place',
                    response.street
                  );
                  setFieldValue(
                    'addresses_attributes[0].neighborhood',
                    response.neighborhood
                  );
                  setFieldValue(
                    'addresses_attributes[0].reference',
                    ''
                  );
                  setFieldValue(
                    'addresses_attributes[0].complement',
                    ''
                  );
                }}}
            }
          />
          {cepError ? <span> CEP inválido </span> : null}
          <ErrorMessage name="addresses_attributes[0].zip_code" />
          <Input
            type="text"
            name="addresses_attributes[0].name"
            placeholder="Apelido do Endereço"
          />
          <ErrorMessage name="addresses_attributes[0].name" />
          <Input
            type="text"
            name="addresses.public_place"
            value={addresses.street}
            placeholder="Rua"
            onBlur={e => {
              setFieldValue(
                'addresses_attributes[0].public_place',
                e.currentTarget.value
              );
            }}
          />
          <ErrorMessage name="addresses_attributes[0].public_place" />
          <NumberComplement>
            <NumberContainer>
              <Input
                type="text"
                name="addresses_attributes[0].number"
                placeholder="Número"
              />
            </NumberContainer>
            <ComplementContainer>
              <Input
                type="text"
                name="addresses_attributes[0].complement"
                placeholder="Complemento"
              />
            </ComplementContainer>
          </NumberComplement>
          <ErrorMessage name="addresses_attributes[0].number" />
          <Input
            type="text"
            name="addresses_attributes[0].reference"
            placeholder="Referência"
          />
          <Input
            type="text"
            name="addresses.neighborhood"
            value={addresses.neighborhood}
            placeholder="Bairro"
            onBlur={e => {
              setFieldValue(
                'addresses_attributes[0].neighborhood',
                e.currentTarget.value
              );
            }}
          />
          <ErrorMessage name="addresses_attributes[0].neighborhood" />
          <CityState>
            <CityContainer>
              <Input
                type="text"
                name="addresses.city"
                value={addresses.city}
                placeholder="Cidade"
                disabled={true}
              />
            </CityContainer>
            <StateContainer>
              <Input
                type="text"
                name="addresses.state"
                value={addresses.state}
                placeholder="Estado"
                disabled={true}
              />
            </StateContainer>
          </CityState>
          <StepBack>
            <StepButton
              type="button"
              onClick={() => {
                handleSteps(values);
              }}
            >
              &lt;
            </StepButton>
          </StepBack>
          <SubmitButton onClick={()=> console.log(values)}>
            Criar Conta
          </SubmitButton>
          <CancelAddress
            type="button"
            onClick={() => {
              delete values.addresses_attributes;
              handleSteps(values);
              setAddresses(emptyAddresses)
            }}
          >
            Mudei de idiea, não quero cadastrar endereço agora...
          </CancelAddress>
          {signUpError ? (
            <span> Não foi possível realizar seu cadastro </span>
          ) : null}
          <AlreadySignedUp>
            Já tem cadastro?
            <AlreadySignedUpLink to="/login"> Entre Aqui</AlreadySignedUpLink>
          </AlreadySignedUp>
        </FormType>
      )}
    </Formik>
  );
};
