import {
  FooterContainer,
  LeftDiv,
  LogoImage,
  FooterText,
  RightDiv,
  CopyrightText,
  Bottom,
  Content,
} from './styles.ts';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <FooterContainer>
        <Content>
        <LeftDiv>
          <LogoImage src={logo} alt="Logo" />
          <FooterText>Somos um espaço exclusivo e diferenciado que conecta você a restaurantes de excelência em diversas culinárias. No Chama o Chef, a qualidade é nossa prioridade. Garantimos que cada prato entregue na sua porta seja uma explosão de sabores e uma celebração da gastronomia. Afinal, acreditamos que cada refeição é um momento especial!</FooterText>
        </LeftDiv>
        <RightDiv>
          <FooterText>Início</FooterText>
          <FooterText>Sobre nós</FooterText>
          <FooterText>Termos e Condições</FooterText>
          <FooterText>Políticas de privacidade</FooterText>
          <FooterText>Fale Conosco</FooterText>
        </RightDiv>
        </Content>
        <Bottom>
          <CopyrightText>© Copyright 2023 - Chama o Chef - Todos os direitos reservados Chama o Chef.</CopyrightText>
        </Bottom>
    </FooterContainer>
  );
};

export default Footer;