import { AddressProvider } from './contexts/AddressContext';
import ChamaOChefeRoutes from './routes/ChamaOChefeRoutes';

function App() {
  return (
    <AddressProvider>
      <ChamaOChefeRoutes />
    </AddressProvider>
  );
}

export default App;