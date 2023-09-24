import { SignUpLocal } from "../../services/structure";
import * as Yup from 'yup';

export interface SignUpStepProps {
    data: SignUpLocal;
    next: (values: SignUpLocal) => void;
  }

  const telephonesSchema = Yup.object().shape({
    number: Yup.string().matches(/^(\d{10}|\d{11})$/, '10 ou 11 numeros'),
  })

  export const dataSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Mínimo de 5 caracteres').required('Campo obrigatório'),
    email: Yup.string().email('ô burro').required('Campo obrigatório'),
    telephones_attributes: Yup.array().of(telephonesSchema),
    password: Yup.string()
    .min(4, 'Mínimo de 4 caracteres')
    // .matches(
    //   /^(?=.*[a-z])/,'Precisa de letra minúscula').matches(
    //   /(?=.*[A-Z])/,'Precisa de letra maiúscula').matches(
    //   /(?=.*[0-9])/, 'Precisa de número').matches(
    //   /(?=.*[-!@#\$%\^&\*])/, 'Precisa de caracter especial').max(
    //   4,'Precisa de ter no máximo 4 caracteres')
      .required('Campo obrigatório'),
    password_confirmation: Yup.string().required('Campo obrigatório').oneOf([Yup.ref('password'), ''], 'Senhas não coincidem'),
    
  })