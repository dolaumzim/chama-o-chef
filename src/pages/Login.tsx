import AuthFormLayout from '../components/AuthFormLayout/index.tsx';
import Input from '../components/Inputs';
import Button from '../components/Button.tsx';



const Login: React.FC = () => {
  return (
    <AuthFormLayout>
      <h2>Login</h2>
      <Input type="email" placeholder="E-mail" value="" onChange={() => {}} />
      <Input type="password" placeholder="Senha" value="" onChange={() => {}} />
      <Button onClick={() => {}} label="Login" />
      <a href="/forgot-password">Esqueci minha senha</a>
      <a href="/signup">Cadastro</a>
    </AuthFormLayout>
  );
};

export default Login;
