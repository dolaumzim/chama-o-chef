import { SignUpLocal } from "../../services/structure";
import * as Yup from 'yup';

export interface SignUpStepAddressProps {
    data: SignUpLocal;
    prev: (values: SignUpLocal) => void;
  }

  export const emptyAddresses = {
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

  const addressesSchema = Yup.object().shape({
    zip_code: Yup.string().matches(/^(\d{8})$/, 'Formato inválido').required('Campo obrigatório'),
    name: Yup.string().min(2,'Deve ter no mínimo 2 caracteres').required('Campo obrigatório'),
    public_place: Yup.string().required('Campo obrigatório'),
    number: Yup.number().required('Campo obrigatório'),
    neighborhood: Yup.string().required('Campo obrigatório'),
    });

  export const dataSchema = Yup.object().shape({
    addresses_attributes: Yup.array().of(addressesSchema),
  })