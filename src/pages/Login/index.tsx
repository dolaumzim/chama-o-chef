import { Formik, Form, Field } from 'formik';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../stylesteste.css';
import * as Props from './structure.ts';
import SidebarLayout from '../../components/SidebarLayout/index.tsx';
import { postLoginRequest } from '../../services/Auth/postLogin.ts';
import AuthFormLayout from '../../components/AuthFormLayout/index.tsx';
import Button from '../../components/Button.tsx/index.tsx';
import * as PropsServices from '../../services/structure.ts';

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

      localStorage.setItem('token', token);
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
    <SidebarLayout>
      <AuthFormLayout>
        <h2>Login</h2>
        {loginError && <div className="error-message">{loginError}</div>}
        {loginSuccess && (
          <div className="success-message">Login bem-sucedido!</div>
        )}
        <div className="rightHalf">
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
              <Form>
                <div>
                  <Field
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting || isLoading}
                  />
                  {touched.email && errors.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>

                <div>
                  <Field
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting || isLoading}
                  />
                  {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>

                <Button label="Login" disabled={isSubmitting || !isValid} />
              </Form>
            )}
          </Formik>
          <Link to="/forgot-password">Esqueci minha senha</Link>
          <Link to="/signup">Cadastro</Link>
        </div>
      </AuthFormLayout>
    </SidebarLayout>
  );
};

export default Login;
