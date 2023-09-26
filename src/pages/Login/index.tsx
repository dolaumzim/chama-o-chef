import { Formik } from 'formik';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesteste.css';
import * as Props from './structure.ts';
import { postLoginRequest } from '../../services/Auth/postLogin.ts';
// import  {Button } from '../../components/Button';
import * as PropsServices from '../../services/structure.ts';
import { Input } from '../../components/Input';
import { ErrorSpan, FormType, NewUser, NewUserLink, PageSubtitle, PageTitle, PasswordForgot, SubmitButton } from './styles.ts';
import { frontEndRoutes } from '../../routes/index.ts';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (values: Props.PropsLogin) => {
    try {
      setIsLoading(true);
      setLoginError(null);

      const user = {
        email: values.email,
        password: values.password
      };

      const response = await postLoginRequest({
        user
      } as PropsServices.PropsLogin);
      const token = response.data.access_token;
      const refresh_token = response.data.refresh_token;

      localStorage.setItem('token', token);
      localStorage.setItem('refresh_token', refresh_token);
      setLoginSuccess(true);
      navigate(`/home`);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoginError('Email ou senha incorretos.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <>
          <Formik
            initialValues={Props.initialValues}
            validationSchema={Props.validationSchema}
            onSubmit={onSubmit}
          >
            {({
              errors,
              isSubmitting,
              touched,
              values,
              handleChange,
              handleBlur,
              isValid
            }) => (
              <FormType>
                  <img src="/Logo Login.svg" alt="" />
                  <PageTitle>Acesse sua conta</PageTitle>
                  <PageSubtitle>Insira seus dados abaixo para realizar o Login</PageSubtitle>
                
                  <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting || isLoading}
                  />
                  {touched.email && errors.email ? (
                    <ErrorSpan>{errors.email}</ErrorSpan>
                  ) : null}
                
                  <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting || isLoading}
                  />
                  {touched.password && errors.password ? (
                    <ErrorSpan>{errors.password}</ErrorSpan>
                  ) : null}

                  {loginError && <ErrorSpan>{loginError}</ErrorSpan>}
                  {loginSuccess && (
                    <div className="success-message">Login bem-sucedido!</div>
                  )}

                <PasswordForgot to={frontEndRoutes.forgotPassword}>Esqueceu a senha?</PasswordForgot>
                <SubmitButton disabled={isSubmitting || !isValid}>
                  Entrar
                </SubmitButton>

              <NewUser>
                Não tem uma conta?
              <NewUserLink to="/SignUp"> Cadastre-se</NewUserLink>
            </NewUser>
              </FormType>
            )}
          </Formik>
      </>
  );
};

export default Login;
