import AuthFormLayout from '../components/AuthFormLayout/index.tsx';
import Input from '../components/Inputs';
import Button from '../components/Button.tsx';
import { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRecoverPassword = () => {



  };

  const handleSetNewPassword = () => {




  };

  return (
    <AuthFormLayout>
      <h2>Esqueci Minha Senha</h2>
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleRecoverPassword} label="Recuperar Senha" />
      <Input
        type="text"
        placeholder="Código"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Nova Senha"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirmação da Nova Senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button onClick={handleSetNewPassword} label="Definir Nova Senha" />
    </AuthFormLayout>
  );
};

export default ForgotPassword;
