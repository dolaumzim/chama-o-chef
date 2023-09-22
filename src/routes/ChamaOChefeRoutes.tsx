import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import SidebarLayout from '../components/SidebarLayout';

const ChamaOChefeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default ChamaOChefeRoutes;
