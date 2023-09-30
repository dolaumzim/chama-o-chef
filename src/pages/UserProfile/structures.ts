import { SignUpLocal } from '../../services/structure';
import * as Yup from 'yup';

export interface SignUpStepAddressProps {
  data: SignUpLocal;
  prev: (values: SignUpLocal) => void;
}

export interface telephoneProps {
  telephone: number | null;
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
      latitude: ''
    }
  },
  city_id: ''
};

export const addressesSchema = Yup.object().shape({
  zip_code: Yup.string()
    .matches(/^(\d{8})$/, 'Formato inválido')
    .required('Campo obrigatório'),
  name: Yup.string()
    .min(2, 'Deve ter no mínimo 2 caracteres')
    .required('Campo obrigatório'),
  public_place: Yup.string().required('Campo obrigatório'),
  number: Yup.number().required('Campo obrigatório'),
  neighborhood: Yup.string().required('Campo obrigatório')
});

export const addressInitial = {
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
      latitude: ''
    }
  },
  city_id: ''
};

export const telephoneInitial = {
  telephone: null
};

export const telephoneSchema = Yup.object().shape({
  telephone: Yup.string().matches(/^(\d{10}|\d{11})$/, '10 ou 11 numeros').required('Obrigatório')
});

export const newAddressInitial = {
  name: '',
  public_place: '',
  zip_code: '',
  number: '',
  neighborhood: '',
  reference: '',
  complement: '',
  city_id: '',
  latitude: null,
  longitude: null
};
