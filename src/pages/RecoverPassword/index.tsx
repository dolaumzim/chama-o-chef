import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/Input';
import { FormType, PageSubtitle, PageTitle, SubmitButton } from './styles.ts';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  code: Yup.string().required('Código de recuperação é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas devem coincidir')
    .required('Confirmação de senha é obrigatória'),
});

const RecoverPassword: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const navigate = useNavigate();

  const handleResetPassword = async (values: {
    code: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
  
      const response = await axios.put('http://academy-react.rarolabs.com.br/api/v1/passwords/reset', {
      reset_password_token: values.code,
      password: values.password,
      password_confirmation: values.confirmPassword,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 204) {
      navigate('/login');
    } else {
      console.error('Erro ao redefinir a senha');
      alert('Algo deu errado. Por favor, tente novamente mais tarde.');
    }
  } catch (error) {
    console.error('Erro de validação:', error);
  }
};

  return (
    <Formik
      initialValues={{ code: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={handleResetPassword}
    >
      {({ isSubmitting }) => (
        <FormType as={Form}>
          <img src="src/assets/LogoLogin.svg" alt="Logo" />
          <PageTitle>Redefinir Senha</PageTitle>
          <PageSubtitle>
            Insira o código de recuperação enviado para o email: {email}
          </PageSubtitle>

          <Field
            as={Input}
            type="text"
            placeholder="Código de Recuperação"
            name="code"
          />
          <ErrorMessage name="code" component="div" />

          <Field
            as={Input}
            type="password"
            placeholder="Nova Senha"
            name="password"
          />
          <ErrorMessage name="password" component="div" />

          <Field
            as={Input}
            type="password"
            placeholder="Confirme a Nova Senha"
            name="confirmPassword"
          />
          <ErrorMessage name="confirmPassword" component="div" />

          <SubmitButton type="submit" disabled={isSubmitting}>
            Redefinir Senha
          </SubmitButton>
        </FormType>
      )}
    </Formik>
  );
};

export default RecoverPassword;