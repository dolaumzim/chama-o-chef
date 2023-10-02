import QRCode from 'react-qr-code';
import { Container, Modal, StyledLink } from './styles';

interface QRCodeDisplayProps {
  url: string;
  orderId: string;
}

export const QRCodeDisplay = ({ url, orderId }: QRCodeDisplayProps) => {
  return (
    <Container>
      <Modal>
        <QRCode value={url} size={300} />
        <StyledLink to={`/review/${orderId}`}>Finalizar</StyledLink>
      </Modal>
    </Container>
  );
};
