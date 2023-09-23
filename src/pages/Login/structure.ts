import * as Yup from 'yup';

export interface PropsLogin {
  email: string;
  password: string;
}

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('* E-mail inválido')
    .required('* Campo obrigatório'),
  password: Yup.string().required('* Campo obrigatório')
});

export const initialValues: { email: string; password: string } = {
    email: '',
    password: ''
  };
