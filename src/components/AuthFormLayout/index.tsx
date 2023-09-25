import { Outlet } from 'react-router';
import { Container, LayoutSection, LayoutTitle, OutletSection } from './styles';

export const AuthFormLayout: React.FC = () => {
  return (
    <Container>
      <LayoutSection >
        <LayoutTitle>Aproveite do conforto da sua casa, os melhores pratos do melhores Chefs!</LayoutTitle>
      </LayoutSection>
      <OutletSection><Outlet/></OutletSection>
    </Container>
  );
};