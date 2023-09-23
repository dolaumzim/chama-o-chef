import { Outlet } from 'react-router';
import { Container, LayoutSection, LayoutTitle, OutletSection } from './styles';

export const AuthFormLayout: React.FC = () => {
  return (
    <Container>
      <LayoutSection >
      <div>
        <LayoutTitle>FRASE DE EFEITO</LayoutTitle>
      </div>
      </LayoutSection>
      <OutletSection><Outlet/></OutletSection>
    </Container>
  );
};