import { useState } from 'react';
import AuthFormLayout from '../components/AuthFormLayout/index.tsx';
import Input from '../components/Inputs';
import Button from '../components/Button.tsx';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [referencia, setReferencia] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {




};

  return (
    <AuthFormLayout>
      <form
        onSubmit={handleSignUp}
        className="flex justify-center w-[min(384px,100%)] md:w-[min(566px,100%)] gap-4 flex-col"
      >
        <h1 className="text-5xl font-bold mb-8">Cadastro</h1>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <Input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCpf(e.target.value)
          }
        />
        <Input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
        />
        <Input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCep(e.target.value)
          }
        />
        <Input
          type="text"
          placeholder="Bairro"
          value={bairro}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBairro(e.target.value)
          }
        />
        <Input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCidade(e.target.value)
          }
        />
        <Input
          type="text"
          placeholder="Rua"
          value={rua}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRua(e.target.value)
          }
        />
        <Input
          type="number"
          placeholder="Número"
          value={numero}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNumero(e.target.value)
          }
        />
        <Input
          type="text"
          placeholder="Referência"
          value={referencia}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReferencia(e.target.value)
          }
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Input
          type="password"
          placeholder="Confirmação de Senha"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
        <Button onClick={handleSignUp} label="Cadastrar" />
      </form>
    </AuthFormLayout>
  );
};

export default SignUp;
