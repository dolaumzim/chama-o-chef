
import { SignUpLocal } from '../../services/structure.ts';
import { Formik } from 'formik';
import {
  FormType,
  PageTitle,
  SubmitButton,
  AlreadySignedUp,
  AlreadySignedUpLink,
  StepButton,
  StepGo,
} from './styles.ts';
import { useNavigate } from 'react-router-dom';
import { postSignUpRequest } from '../../services/Auth/postSignUp';
import Input from '../Input/index.tsx';


interface SignUpStepProps {
  data: SignUpLocal;
  next: (values: SignUpLocal) => void;
}

export const SignUpStep = ({data, next} : SignUpStepProps ) => {
    const navigate = useNavigate();
  
    const handleSteps = (values: SignUpLocal) => {
      next(values);
    };
  
    const handleSignUp = async (values: SignUpLocal) => {
      try {
        const response = await postSignUpRequest(values);
        console.log(response)
        if (response.status === 200) navigate('/login')
      } catch (error) {
        console.log(error)
      }
    };
  
    return (
      <Formik<SignUpLocal> initialValues={data} onSubmit={handleSignUp}>
        {({ values, errors }) => (
          <FormType>
            <PageTitle>Cadastre-se</PageTitle>
            <Input type="text" name="name" placeholder="Nome" />
            <Input type="email" name="email" placeholder="E-mail" />
            <Input
              type="text"
              name="telephones_attributes[0].number"
              placeholder="Telefone"
            />
            <Input type="password" name="password" placeholder="Senha" />
            <Input
              type="password"
              name="password_confirmation"
              placeholder="Confirmação de Senha"
            />
            <StepGo> Quer cadastrar um endereço?
              <StepButton type='button' onClick={() => {
                handleSteps(values);
                console.log(values);
                }}>
                &gt;
              </StepButton>
            </StepGo>
            <SubmitButton>
              Criar Conta
            </SubmitButton>
            <AlreadySignedUp>
              Já tem cadastro?{' '}
              <AlreadySignedUpLink to="/login">Entre Aqui</AlreadySignedUpLink>
            </AlreadySignedUp>
          </FormType>
        )}
      </Formik>
    );
  };