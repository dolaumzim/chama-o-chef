import { BsInstagram } from 'react-icons/bs';
import { FiGitlab } from 'react-icons/fi';
import { FooterContainer, Links, Title } from './styles';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Title> Chama o Chef 2023, All Rights Reserved</Title>
      <Links>
        <a href="https://www.instagram.com/chama_o_chef/">
          <BsInstagram />
        </a>{' '}
        <a href="https://git.raroacademy.com.br/armando.assini/projeto-final-grupo-6">
          <FiGitlab />
        </a>
      </Links>
    </FooterContainer>
  );
};
