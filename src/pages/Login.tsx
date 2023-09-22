import * as Yup from 'yup';
import AuthFormLayout from '../components/AuthFormLayout/index.tsx';
import Button from '../components/Button.tsx';
import { postLoginRequest } from '../services/Auth/postLogin.ts';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import SidebarLayout from '../components/SidebarLayout/index.tsx';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const initialValues: { email: string; password: string } = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório')
  });

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      setIsLoading(true);
      setLoginError(null);

      const user = {
        email: values.email,
        password: values.password
      };

      const response = await postLoginRequest({ user });
      const token = response.data.access_token;

      localStorage.setItem('token', token);
      setLoginSuccess(true);
      navigate(`/home`);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoginError('Email ou senha incorretos.');
    } finally {
      setIsLoading(false);
      setSubmitting(false);
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              errors,
              isSubmitting,
              touched,
              values,
              handleChange,
              handleBlur
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

                <Button
                  type="submit"
                  label="Login"
                  disabled={isSubmitting || isLoading}
                />
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
