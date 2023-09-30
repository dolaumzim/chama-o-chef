import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { FormType, PageTitle, PageSubtitle, SubmitButton   } from './styles.ts';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Endereço de e-mail inválido')
    .required('E-mail é obrigatório'),
});

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [recoveryToken, setRecoveryToken] = useState<string | null>(null);

  const handleRecoverPassword = async (values: { email: string }) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
  
      const response = await axios.post('http://academy-react.rarolabs.com.br/api/v1/passwords/token', {
        email: values.email,
      });
  
      console.log('Response Status:', response.status);
  
      if (response.status === 200) {
        const responseData = response.data;
        setRecoveryToken(responseData.reset_password_token); // Set the recovery token
        alert('ESTE É SEU TOKEN DE RECUPERAÇÃO, ANOTE COM CARINHO 🫶🏽: ' + responseData.reset_password_token); // Test with a simple alert
        navigate(`/recover-password?email=${values.email}`);
      } else {
        console.error('Error Response:', response.data);
        alert('Algo deu errado. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro de validação:', error);
    }
  };
  

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleRecoverPassword}
    >
      {({ isSubmitting }) => (
        <FormType as={Form}>
          <img src="public/Logo Login.svg" alt="Logo" />
          <PageTitle>Esqueceu sua senha?</PageTitle>
          <PageSubtitle>
            Digite o endereço de e-mail que você usou quando se inscreveu e enviaremos instruções para redefinir sua senha.
          </PageSubtitle>
          {recoveryToken && (
            <div>
              <strong>Token de Recuperação:</strong> {recoveryToken}
            </div>
          )}
          <Field
            as={Input}
            type="email"
            placeholder="E-mail"
            name="email"
          />
          <ErrorMessage name="email" component="div" />

          <SubmitButton type="submit" disabled={isSubmitting}>
            Recuperar senha
          </SubmitButton>
        </FormType>
      )}
    </Formik>
  );
};

export default ForgotPassword;