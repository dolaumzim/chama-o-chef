import { Outlet } from 'react-router';
import { Container, LayoutSection, LayoutTitle, OutletSection } from './styles';

export const PublicSectionLayout: React.FC = () => {
  return (
    <Container>
      <LayoutSection >
        
          <LayoutTitle><i>No conforto da sua casa</i>, os melhores <i>Pratos</i> dos melhores <i>Chefs</i>!</LayoutTitle>
        
      </LayoutSection>
      <OutletSection><Outlet/></OutletSection>
    </Container>
  );
};