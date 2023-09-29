import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import RecoverPassword from '../pages/RecoverPassword';
import Home from '../pages/Home';
import { AuthFormLayout } from '../components/AuthFormLayout';
import { SignUp } from '../pages/SignUp';
// import SidebarLayout from '../components/SidebarLayout';

const ChamaOChefeRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<SidebarLayout />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route element={<AuthFormLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<AuthFormLayout/>}>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      </Route>
      <Route element={<AuthFormLayout />}>
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default ChamaOChefeRoutes;
