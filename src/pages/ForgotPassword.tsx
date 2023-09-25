import { useState } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRecoverPassword = () => {



  };

  const handleSetNewPassword = () => {




  };


  return (
      <div className='righHalf'>
      <h2>Esqueci Minha Senha</h2>
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <Button onClick={handleRecoverPassword}>Recuperar Senha</Button>
      <Input
        type="text"
        placeholder="Código"
        value={code}
        onChange={(e : React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Nova Senha"
        value={newPassword}
        onChange={(e : React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirmação da Nova Senha"
        value={confirmPassword}
        onChange={(e : React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
      />
      <Button onClick={handleSetNewPassword} >Definir Nova Senha</Button>




      </div>
  );
};

