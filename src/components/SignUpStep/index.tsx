import { SignUpLocal } from '../../services/structure.ts';
import { ErrorMessage, Formik } from 'formik';
import {
  FormType,
  PageTitle,
  SubmitButton,
  AlreadySignedUp,
  AlreadySignedUpLink,
  StepButton,
  StepGo
} from './styles.ts';
import { useNavigate } from 'react-router-dom';
import { postSignUpRequest } from '../../services/Auth/postSignUp';
import Input from '../Input/index.tsx';
import { SignUpStepProps, dataSchema } from './structures.ts';
import { useState } from 'react';

export const SignUpStep = ({ data, next }: SignUpStepProps) => {
  const [signUpError, setSignUpError] = useState(false);
  const navigate = useNavigate();

  const handleSteps = (values: SignUpLocal) => {
    next(values);
  };

  const handleSignUp = async (values: SignUpLocal) => {
    try {
      setSignUpError(false);
      const response = await postSignUpRequest(values);
      if (response.status === 200) navigate('/login');
    } catch (error) {
      console.log(error);
      setSignUpError(true);
    }
  };

  return (
    <Formik<SignUpLocal>
      initialValues={data}
      onSubmit={handleSignUp}
      validationSchema={dataSchema}
    >
      {({ values }) => (
        <FormType>
          <PageTitle>Cadastre-se</PageTitle>
          <Input type="text" name="name" placeholder="Nome" />
          <ErrorMessage name="name" />
          <Input type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" />
          <Input
            type="text"
            name="telephones_attributes[0].number"
            placeholder="Telefone"
            maxLength={11}
          />
          <ErrorMessage name="telephones_attributes[0].number" />
          <Input type="password" name="password" placeholder="Senha" />
          <ErrorMessage name="password" />
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirmação de Senha"
          />
          <ErrorMessage name="password_confirmation" />
          <StepGo>
            {' '}
            Quer cadastrar um endereço?
            <StepButton
              type="button"
              onClick={() => {
                handleSteps(values);
                console.log(values);
              }}
            >
              &gt;
            </StepButton>
          </StepGo>
          <SubmitButton>Criar Conta</SubmitButton>
          {signUpError ? (
            <span> Não foi possível realizar seu cadastro </span>
          ) : null}
          <AlreadySignedUp>
            Já tem cadastro?{' '}
            <AlreadySignedUpLink to="/login">Entre Aqui</AlreadySignedUpLink>
          </AlreadySignedUp>
        </FormType>
      )}
    </Formik>
  );
};
