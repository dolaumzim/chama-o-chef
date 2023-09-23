import Input from '../Input/index.tsx';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
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
  StepBack
} from './styles.ts';
import { SignUpLocal } from '../../services/structure.ts';
import { useAddress } from '../../contexts/AddressContext.tsx';
import { getAddressRequest } from '../../services/Auth/getAddress.ts';
import { postSignUpRequest } from '../../services/Auth/postSignUp.ts';

interface SignUpStepAddressProps {
  data: SignUpLocal;
  prev: (values: SignUpLocal) => void;
}

export const SignUpStepAddress = ({data, prev} : SignUpStepAddressProps ) => {
  const {addresses, setAddresses} = useAddress()
  const navigate = useNavigate();

  const handleSteps = (values: SignUpLocal) => {
    prev(values);
  };

  const handleZipCode = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const response = await getAddressRequest(e.target.value);
    setAddresses(response);
    return response;
  };

  const handleSignUp = async (values: SignUpLocal) => {
    try {
      const response = await postSignUpRequest(values);
      if (response.status === 200) navigate('/login')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Formik<SignUpLocal> initialValues={data} onSubmit={handleSignUp}>
      {({ values, setFieldValue, errors }) => (
        <FormType>
          <PageTitle>Cadastre-se</PageTitle>
          <Input
            type="text"
            name="zip_code"
            placeholder="CEP"
            maxLength={8}
            onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.length === 8) {
                const response = await handleZipCode(e);
                setFieldValue('addresses_attributes[0]', response);
                setFieldValue('addresses_attributes[0].zip_code', response.cep);
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
              }
            }}
          />
          <Input
            type="text"
            name="addresses_attributes[0].name"
            placeholder="Apelido do Endereço"
          />
          <Input
            type="text"
            name="addresses.public_place"
            value={addresses.street}
            placeholder="Rua"
          />
          <NumberComplement>
            <NumberContainer>
              <Input
                type="number"
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
          />
          <CityState>
            <CityContainer>
              <Input
                type="text"
                name="addresses.city"
                value={addresses.city}
                placeholder="Cidade"
              />
            </CityContainer>
            <StateContainer>
              <Input
                type="text"
                name="addresses.state"
                value={addresses.state}
                placeholder="Estado"
              />
            </StateContainer>
          </CityState>
          <StepBack>
            <StepButton type="button" onClick={() => {
              handleSteps(values);
              console.log(values);
              }}>
              &lt;
            </StepButton>
          </StepBack>
          <SubmitButton onClick={() => console.log(values)}>
            Criar Conta
          </SubmitButton>
          <AlreadySignedUp>
            Já tem cadastro?
            <AlreadySignedUpLink to="/login">Entre Aqui</AlreadySignedUpLink>
          </AlreadySignedUp>
        </FormType>
      )}
    </Formik>
  );
};
