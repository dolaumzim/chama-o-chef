import { Input } from '../../components/Input';
import { useEffect, useState } from 'react';
import { postClientTelephone } from '../../services/Clients/Telephones/postClientTelephone';
import { getClient } from '../../services/Clients/getClient';
import { deleteClientTelephone } from '../../services/Clients/Telephones/deleteClientTelephone';
import { ErrorMessage, Formik } from 'formik';
import {
  AddressAttributes,
  AddressProps,
  PropsClient
} from '../../services/structure';
import { getAddressRequest } from '../../services/Auth/getAddress';
import { postClientAddress } from '../../services/Clients/Addressess/postClientAddress';
import { deleteClientAddress } from '../../services/Clients/Addressess/deleteClientAddress';
import {
  CityState,
  FormType,
  NumberComplement,
  NumberContainer,
  ComplementContainer,
  CityContainer,
  StateContainer,
  Container,
  PageTitle,
  PageSubtitle,
  Paragraph,
  Section,
  MainInfo,
  SubInfos,
  SubInfo,
  SpanLeft,
  SpanRight,
  Paragraphs,
  NewButton,
  NewNameAndEmail,
  NameAndEmail,
  FormTypeNameAndEmail,
  AddCancel,
  Add,
  Delete,
  Line,
  NewButtonContainer,
  SectionTelephones,
  SubInfosAddresses,
  DeleteContainer,
  FormTypeAddresses,
  Logo,
  Back
} from './styles.ts';
import { useAddress } from '../../contexts/AddressContext.tsx';
import { addressInitial, addressesSchema, emptyAddresses, newAddressInitial, telephoneInitial, telephoneProps, telephoneSchema } from './structures.ts';
import { putUpdateClient } from '../../services/Clients/putUpdateClient.ts';
import Header from '../../components/Header/index.tsx';
import arrowLeft from '../../assets/arrow-left.svg';


interface updateProps {
  name : string;
  email : string;
}


export const UserProfile = () => {
  const [cepError, setCepError] = useState(false);
  const { addresses, setAddresses } = useAddress();
  const [addTelButton, setAddTelButton] = useState(false);
  const [addAddressButton, setAddAddressButton] = useState(false);
  const [addNameAndEmailButton, setAddNameAndEmailButton] = useState(false);
  const [user, setUser] = useState<PropsClient>({
    id: '',
    name: '',
    email: '',
    created_at: new Date(),
    updated_at: new Date(),
    telephones: [
      {
        id: '',
        number: null,
        contactable_type: '',
        contactable_id: '',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    addresses: [
      {
        id: '',
        name: '',
        public_place: '',
        zip_code: 0,
        number: 0,
        neighborhood: '',
        reference: '',
        complement: '',
        latitude: 0,
        longitude: 0,
        city_id: '',
        addressable_type: '',
        addressable_id: '',
        created_at: new Date(),
        updated_at: new Date()
    }
]
});

const updateInitial = {
  name: '',
  email : '',
}

const [cityAndState, setCityAndState] = useState<AddressProps[]>([
  addressInitial
]);

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

  const clientInfo = async () => {
    try {
      const clientResponse = await getClient();
      setUser(clientResponse);

      const zipCodes = clientResponse.addresses.map(
        address => address.zip_code
      );

      const addressResponses = await Promise.all(
        zipCodes.map(zipCode => getAddressRequest(zipCode.toString()))
      );
      setCityAndState(addressResponses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    clientInfo();
  }, []);

  const handleDeleteTelephone = async (id: string) => {
    await deleteClientTelephone(id);
    clientInfo();
  };

  const handleDeleteAddress = async (id: string) => {
    await deleteClientAddress(id);
    clientInfo();
  };

  const handleAddTelephone = async (newTel: number) => {
    const response = await postClientTelephone(newTel);
    clientInfo();
    setAddTelButton(false);
    console.log(response);
  };

  const handleAddAddress = async (values: AddressAttributes) => {
    await postClientAddress(values);
    clientInfo();
    setAddAddressButton(false);
  };

  const handleEditNameAndEmail = async(name : string, email : string) =>{
    const updateValues = {
      name,
      email,
      telephones_attributes : [],
      addresses_attributes : []
    }
    await putUpdateClient(updateValues)
    clientInfo();
  }

  function formatPhone(phoneNumber: string) {
    const length = phoneNumber.length

    if (length===11){
    const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }}
    else {
      const match = phoneNumber.match(/^(\d{2})(\d{4})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    }
  }

  function formatCEP(cep: string) {

    const match = cep.match(/^(\d{5})(\d{3})$/)
    if (match) {
      return ` ${match[1]}-${match[2]}`;
    }
  }
  
  const onSubmit = () => {};

  return (
    <Container>
      <Header action={true}/>
        <Section>
        <Back to="/home" title="Voltar">
            <img src={arrowLeft} alt="Seta para a esquerda" /> Voltar
          </Back>
          <Logo src="Logo Login.svg" alt="" />
          <PageTitle>Perfil</PageTitle>
          <MainInfo>
            {!addNameAndEmailButton ?
              <MainInfo>
                <Paragraph>Nome: {user.name}</Paragraph>
                <Paragraph>E-mail: {user.email}</Paragraph>
              </MainInfo>
              :null}

              {addNameAndEmailButton ? 
              
              <Formik<updateProps>
                  initialValues={updateInitial}
                  onSubmit={onSubmit}
                  validationSchema={telephoneSchema}
                >
                  {({ values, setFieldValue, resetForm }) => (
                    <FormTypeNameAndEmail>
                      <NewNameAndEmail>
                      <NameAndEmail>
                        Nome: <Input type="text" name="name" placeholder={user.name}
                        onChange={(e)=> {setFieldValue('name', e.target.value)}}/>
                      </NameAndEmail>
                      <NameAndEmail>
                      Email: <Input type="email" name="email" placeholder={user.email}
                      onChange={(e)=> {setFieldValue('email', e.target.value)}}/>
                      </NameAndEmail>
                      </NewNameAndEmail>

                      <AddCancel>
                        <Add
                          onClick={() => {
                            handleEditNameAndEmail(
                              values.name, values.email
                            );
                            resetForm();
                            setAddNameAndEmailButton(false)
                          }}
                        >
                          Atualizar
                        </Add>
                        <Delete onClick={()=>{setAddNameAndEmailButton(false); resetForm(); }}> X </Delete>
                      </AddCancel>

                    </FormTypeNameAndEmail>
                  )}
                </Formik>
              :
              
                <NewButtonContainer>
                  <NewButton type="button" onClick={() => setAddNameAndEmailButton(true)}>
                    Editar
                  </NewButton>
                </NewButtonContainer>
              }

          </MainInfo>
          <Line></Line>

          <SectionTelephones>
            <PageSubtitle>Telefones</PageSubtitle>
            
              <SubInfos>
                  {user.telephones.map((telephone, index) => (
                    <SubInfo key={index}>
                  <Paragraphs>
                  {telephone.number ?
                  <><SpanLeft>Número:  </SpanLeft> <SpanRight>{formatPhone(telephone.number.toString())}</SpanRight> </> :null}
                      <Delete
                        onClick={() => {
                          handleDeleteTelephone(telephone.id);
                        }}
                      >
                        DELETAR
                      </Delete>
                  </Paragraphs>
                    </SubInfo>
                  ))}
              </SubInfos>
              {addTelButton ? (
                
                  <Formik<telephoneProps>
                    initialValues={telephoneInitial}
                    onSubmit={onSubmit}
                    validationSchema={telephoneSchema}
                  >
                    {({ values, setFieldValue }) => (
                      <FormType>
                        <Input type="text" name="telephone" placeholder="Telefone" maxLength={11}/>
                        <AddCancel>
                          <Add
                            onClick={() => {
                              handleAddTelephone(
                                values.telephone ? values.telephone : 0
                              );
                              setFieldValue('telephone', '');
                            }}
                          >
                            ADICIONAR
                          </Add>
                          <Delete onClick={()=>{setAddTelButton(false); setFieldValue('telephone', ''); }}> X </Delete>
                        </AddCancel>
                      </FormType>
                    )}
                  </Formik>
                
              ) : null}
              {!addTelButton?
              <NewButtonContainer>
                <NewButton type="button" onClick={() => setAddTelButton(true)}>
                  Novo telefone
                </NewButton>
              </NewButtonContainer>
              :null}
              <Line></Line>
          </SectionTelephones>
          
          <PageSubtitle>Endereços</PageSubtitle>
          <SubInfosAddresses>
            {user.addresses.map((address, index) => (
              <SubInfo key={index}>
                <Paragraphs>
                <SpanLeft>Nome: </SpanLeft> <SpanRight>{address.name}</SpanRight>
                </Paragraphs>
                <Paragraphs>
                  <SpanLeft>Cep: </SpanLeft> <SpanRight>{formatCEP(address.zip_code.toString())}</SpanRight>
                </Paragraphs>
                <Paragraphs>
                  <SpanLeft>Logradouro: </SpanLeft> <SpanRight>{address.public_place}</SpanRight>
                </Paragraphs>
                <Paragraphs>
                  <SpanLeft>Número: </SpanLeft> <SpanRight>{address.number}</SpanRight>
                </Paragraphs>
                <Paragraphs>
                  <SpanLeft>Referência: </SpanLeft> <SpanRight>{address.reference}</SpanRight>
                </Paragraphs>
                <Paragraphs>
                  <SpanLeft>Complemento: </SpanLeft> <SpanRight>{address.complement}</SpanRight>
                </Paragraphs>
                <Paragraphs>
                  <SpanLeft>Bairro: </SpanLeft> <SpanRight>{address.neighborhood}</SpanRight>
                </Paragraphs>
                {cityAndState[index] === undefined ? null : (
                  <>
                    <Paragraphs>
                      <SpanLeft>Cidade: </SpanLeft> <SpanRight>{cityAndState[index].city}</SpanRight>
                    </Paragraphs>
                    <Paragraphs>
                      <SpanLeft>Estado: </SpanLeft> <SpanRight>{cityAndState[index].state}</SpanRight>
                    </Paragraphs>
                  </>
                )}
                <DeleteContainer>
                  <Delete
                    onClick={() => {
                      handleDeleteAddress(address.id);
                    }}
                  >
                    DELETAR
                  </Delete>
                </DeleteContainer>
              </SubInfo>
            ))}
            </SubInfosAddresses>
            {addAddressButton ? (
              <Formik<AddressAttributes>
                initialValues={newAddressInitial}
                onSubmit={onSubmit}
                validationSchema={addressesSchema}
              >
                {({ values, setFieldValue, resetForm }) => (
                  <FormTypeAddresses>
                    <Input
                      type="text"
                      name="zip_code"
                      placeholder="CEP"
                      maxLength={8}
                      onChange={async (e: any) => {
                        setFieldValue('zip_code', e.target.value);
                        if (e.target.value.length === 8) {
                          const response = await handleZipCode(e);
                          if (response) {
                            setFieldValue('city_id', response.city_id);
                            setFieldValue(
                              'latitude',
                              response.location.coordinates.latitude
                            );
                            setFieldValue(
                              'longitude',
                              response.location.coordinates.longitude
                            );
                            setFieldValue('public_place', response.street);
                            setFieldValue('neighborhood', response.neighborhood);
                            setFieldValue('reference', '');
                            setFieldValue('complement', '');
                          }
                        }
                      }}
                    />
                    {cepError ? <span> CEP inválido </span> : null}
                    <ErrorMessage name="zip_code" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Apelido do Endereço"
                    />
                    <ErrorMessage name="name" />
                    <Input
                      type="text"
                      name="addresses.public_place"
                      value={addresses.street}
                      placeholder="Rua"
                      onBlur={e => {
                        setFieldValue('public_place', e.currentTarget.value);
                      }}
                    />
                    <ErrorMessage name="public_place" />
                    <NumberComplement>
                      <NumberContainer>
                        <Input type="text" name="number" placeholder="Número" />
                      </NumberContainer>
                      <ComplementContainer>
                        <Input
                          type="text"
                          name="complement"
                          placeholder="Complemento"
                        />
                      </ComplementContainer>
                    </NumberComplement>
                    <ErrorMessage name="number" />
                    <Input type="text" name="reference" placeholder="Referência" />
                    <Input
                      type="text"
                      name="addresses.neighborhood"
                      value={addresses.neighborhood}
                      placeholder="Bairro"
                      onBlur={e => {
                        setFieldValue('neighborhood', e.currentTarget.value);
                      }}
                    />
                    <ErrorMessage name="neighborhood" />
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
                    <AddCancel>
                      <Add
                        onClick={() => {
                          handleAddAddress(values);
                          resetForm();
                          setAddresses(emptyAddresses);
                        }}
                      >
                        ADICIONAR
                      </Add>
                      <Delete type='button' onClick={()=>{
                          setAddAddressButton(false);
                          resetForm();
                          setAddresses(emptyAddresses);
                      }}> X </Delete>
                    </AddCancel>
                  </FormTypeAddresses>
                )}
              </Formik>
            ) : null}
          
            <NewButtonContainer>
              <NewButton type="button" onClick={() => setAddAddressButton(true)}>
                Novo endereço
              </NewButton>
            </NewButtonContainer>
            <Line></Line>
        </Section>
    </Container>
  );
};
