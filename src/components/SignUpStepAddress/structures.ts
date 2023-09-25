import { SignUpLocal } from "../../services/structure";
import * as Yup from 'yup';

export interface SignUpStepAddressProps {
    data: SignUpLocal;
    prev: (values: SignUpLocal) => void;
  }

  export const newAddress = {
    name: '',
    public_place: '',
    zip_code: '',
    number: '',
    neighborhood: '',
    reference: '',
    complement: '',
    city_id: '',
    latitude: '',
    longitude: '',
  }

  const addressesSchema = Yup.object().shape({
    zip_code: Yup.string().required('Campo obrigatório'),
    name: Yup.string().min(2,'Deve ter no mínimo 2 caracteres').required('Campo obrigatório'),
    public_place: Yup.string().required('Campo obrigatório'),
    number: Yup.number().required('Campo obrigatório'),
    neighborhood: Yup.string().required('Campo obrigatório'),
    });

  export const dataSchema = Yup.object().shape({
    addresses_attributes: Yup.array().of(addressesSchema),
  })