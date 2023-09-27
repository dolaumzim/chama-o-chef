import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { PublicSectionLayout } from '../components/PublicSectionLayout';
import { SignUp } from '../pages/SignUp';

import { ForgotPassword } from '../pages/ForgotPassword';
import { frontEndRoutes } from '.';

const ChamaOChefeRoutes = () => {
  // if(logged)
  return (
    <Routes>
      <Route element={<PublicSectionLayout />}>
        <Route path={frontEndRoutes.login} element={<Login />} />
        <Route path={frontEndRoutes.signup} element={<SignUp />} />
        <Route
          path={frontEndRoutes.forgotPassword}
          element={<ForgotPassword />}
        />
      </Route>
      <Route path="/*" element={<Navigate replace to={'/login'} />} />
      {/* </Routes>
        )
        
        return (
        <Routes> */}
      <Route path={frontEndRoutes.home} element={<Home />} />
      <Route path="/*" element={<Navigate replace to={'/login'} />} />
    </Routes>
  );
};

export default ChamaOChefeRoutes;
