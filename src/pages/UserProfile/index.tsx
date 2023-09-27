import { useEffect, useState } from 'react';
import { putUpdateClient } from '../../services/Clients/putUpdateClient';
import { postClientTelephone } from '../../services/Clients/Telephones/postClientTelephone';
import { getClient } from '../../services/Clients/getClient';
import { getClientTelephones } from '../../services/Clients/Telephones/getClientTelephones';
import { deleteClientTelephone } from '../../services/Clients/Telephones/deleteClientTelephone';
import { Field, FieldArray, Form, Formik } from 'formik';
import { AddressProps, ClientTelephone, PropsClient } from '../../services/structure';
import { getCity } from '../../services/StatesAndCities/getCity';
import { getAddressRequest } from '../../services/Auth/getAddress';
import { postClientAddress } from '../../services/Clients/Addressess/postClientAddress';
import { deleteClientAddress } from '../../services/Clients/Addressess/deleteClientAddress';

export interface UpdateProps {
  name: string;
  email: string;
  telephones_attributes: {
    id: string;
    number: number;
    _destroy?: boolean;
  }[];
  addresses_attributes: {
    id: string;
    name: string;
    public_place: string;
    zip_code: string;
    number: number;
    neighborhood: string;
    reference: string;
    complement: string;
    latitude: number;
    longitude: number;
    city_id: string;
  }[];
}

export const UserProfile = () => {
  const values: UpdateProps = {
    name: 'dolaumzim assini',
    email: 'dolo22@gmail.com',
    telephones_attributes: [
      {
        id: '4e9b9f2c-1bdf-4b8d-8d04-3992a6ef3541',
        number: 31988960070
      }
      // {
      //     id: "d4e754db-3bbb-43b8-9bb2-faebe8b2a843",
      //     number: 31994942055
      // },
      // {
      //     id: "5b9a2cbc-4227-4eb4-ba99-c36fe1969d11",
      //     number: 31994942055,
      //     _destroy: true
      // }
    ],
    addresses_attributes: [
      // {
      //     id: "825a0272-53cc-48d0-850c-7fc63891dcb2",
      //     name: "RaroLabs",
      //     public_place: "Rua Paul Bothilier",
      //     zip_code: "30315010",
      //     number: 266,
      //     neighborhood: "Comiteco",
      //     reference: "Referência",
      //     complement: "Casa",
      //     latitude: -19.9511221,
      //     longitude: -43.9214969,
      //     city_id: "a69189e3-caba-4eb2-b8ee-825cb8ddf9f6"
      // }
    ]
  };

    const addressInitial = {
        cep: '',
        street: '',
        neighborhood: '',
        city: '',
        state: '',
        service: '',
        location: {
          type: '',
          coordinates: {
            longitude: '',
            latitude: '',
          },
        },
        city_id: '',
      }

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
        updated_at: new Date(),
      },
    ],

  });

  const [cityAndState, setCityAndState] = useState<AddressProps[]>([addressInitial]);


  const clientInfo = async () => {
    try {
    
    const clientResponse = await getClient();
    setUser(clientResponse);


    const zipCodes = clientResponse.addresses.map((address) => address.zip_code);

    const addressResponses = await Promise.all(
    zipCodes.map((zipCode) => (getAddressRequest(zipCode.toString())))
    );
    setCityAndState(addressResponses);

    console.log(addressResponses);  
    console.log(cityAndState);  

        } catch (error) {
        console.log(error);
        }
    };

  useEffect(() => {
    clientInfo();
  }, []);

  const handleDeleteTelephone = async (id: string) => {
    await deleteClientTelephone(id);
    clientInfo()
  };

  const handleDeleteAddress = async (id: string) => {
    await deleteClientAddress(id);
    clientInfo()
  };

  const handleAddTelephone = async () => {
    const response = await postClientTelephone(Number('1241241241'));
    clientInfo()
    console.log(response);
  };

  const handleAddAddress = async () => {
    const response = await postClientAddress({
        name: 'Casa Curitiba',
        public_place: 'Rua Parintins',
        zip_code: '80320270',
        number: 358,
        neighborhood: 'Vila Izabel',
        reference: 'Ed. Sheffield',
        complement: 'Ap 24',
        latitude: -49.2948626,
        longitude: -25.4588393,
        city_id: '33c1a6b1-fdaa-448d-87f5-c38d46af207d',
      });
    clientInfo()
    console.log(response);
  };

  const initial = {
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
  };

//   const handleCity = async (index:number, zip_code: number) => {
//     const response = await getAddressRequest(zip_code.toString());
//     setCidade(response.city)
    
//   };

  const onSubmit = () => {};
if (!cityAndState[0].city) return null
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <h1>User Information</h1>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h2>Telephones</h2>
      <ul>
        {user.telephones.map((telephone, index) => (
          <li key={index}>
            <p>Number: {telephone.number}</p>

            <button onClick={()=>{
                handleDeleteTelephone(telephone.id);
                }}>DELETAR</button>
          </li>
        ))}
        <button onClick={()=>{
                handleAddTelephone();
                }}>ADICIONAR</button>
      </ul>
      <h2>Addresses</h2>
      <ul>
        {user.addresses.map((address, index) => (
          <li key={index}>
            <p>Nome: {address.name}</p>
            <p>Cep: {address.zip_code}</p>
            <p>Rua: {address.public_place}</p>
            <p>Número: {address.number}</p>
            <p>Referência: {address.reference}</p>
            <p>Complemento: {address.complement}</p>
            <p>Bairro: {address.neighborhood}</p>
            <p>Cidade: {cityAndState[index].city}</p>
            <p>Estado: {cityAndState[index].state}</p>

                <button onClick={()=>{
                handleDeleteAddress(address.id);
                }}>DELETAR</button>

          </li>
        ))}
        <button onClick={()=>{
                handleAddAddress();
                }}>ADICIONAR</button>
      </ul>

            
            

    </div>
  );

  //   return (
  //     <Formik
  //       initialValues={user}
  //       onSubmit={onSubmit}
  //       // validationSchema={dataSchema}
  //     >
  //       {({ values }) => (
  //         <div
  //           style={{
  //             height: '400px',
  //             display: 'flex',
  //             justifyContent: 'center',
  //             alignItems: 'center'
  //           }}
  //         >
  //           <Form>
  //             <Field
  //                 name='name'
  //                 value={user.name}
  //                 disabled={true}
  //                 />
  //             <Field
  //                 name='email'
  //                 value={user.email}
  //                 disabled={true}
  //                 />

  // {user.telephones.map((_, index) => (
  //         <div key={index}>
  //             <Field
  //                 name={`telephone[${index}]`}
  //                 value={user.telephones[index].number}
  //                 disabled={true}
  //                 />
  //         </div>
  // ))}

  // {user.addresses.map((_, index) => (
  //         <div key={index}>
  //             <Field
  //                 name={`addresses[${index}].name`}
  //                 value={user.addresses[index].name}
  //                 disabled={true}
  //                 />
  //             <Field
  //                 name={`addresses[${index}].zip_code`}
  //                 value={user.addresses[index].zip_code}
  //                 disabled={true}
  //                 />
  //             <Field
  //                 name={`addresses[${index}].public_place`}
  //                 value={user.addresses[index].public_place}
  //                 disabled={true}
  //                 />
  //             <Field
  //                 name={`addresses[${index}].number`}
  //                 value={user.addresses[index].number}
  //                 disabled={true}
  //                 />
  //             <Field
  //                 name={`addresses[${index}].complement`}
  //                 value={user.addresses[index].complement}
  //                 disabled={true}
  //                 />
  //             <Field
  //                 name={`addresses[${index}].reference`}
  //                 value={user.addresses[index].reference}
  //                 disabled={true}
  //                 />

  //             <Field
  //                 name={`cidade`}
  //                 value={cidade}
  //                 disabled={true}
  //                 />
  //             <Field
  //                 name={`estado`}
  //                 value={estado}
  //                 disabled={true}
  //                 />
  //         </div>
  // ))}

  //             <FieldArray
  //               name="telephones"
  //               render={arrayHelpers => (
  //                 <div>
  //                   {values.telephones.map((_, index) => (
  //                     <div key={index}>
  //                       <Field
  //                         name={`telephones[${index}].number`}
  //                         value={user.telephones[index].number}
  //                         //   disabled=
  //                       />

  //                       <button
  //                         type="button"
  //                         onClick={() => arrayHelpers.remove(index)}
  //                       >
  //                         -
  //                       </button>
  //                     </div>
  //                   ))}
  //                   <button
  //                     type="button"
  //                     onClick={() =>
  //                       arrayHelpers.push({
  //                         number: null
  //                       })
  //                     }
  //                   >
  //                     +
  //                   </button>
  //                 </div>
  //               )}
  //             />
  //           </Form>
  //         </div>
  //       )}
  //     </Formik>
  //   );
};
