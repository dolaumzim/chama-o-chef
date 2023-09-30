import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import RecoverPassword from '../pages/RecoverPassword';
import Home from '../pages/Home';
import { PublicSectionLayout } from '../components/PublicSectionLayout';
import { SignUp } from '../pages/SignUp';
import { frontEndRoutes } from '.';
import { DishDetails } from '../pages/DishDetails';
// import { Locationteste } from '../pages/locationteste';
// import { UserProfile } from '../pages/UserProfile';

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
        <Route
          path={frontEndRoutes.recoverPassword}
          element={<RecoverPassword />}
        />
        {/* <Route path="/location" element={<Locationteste/>} /> */}
      </Route>
      <Route path="/*" element={<Navigate replace to={'/login'} />} />
      {/* </Routes>
        )
        return (
        <Routes> */}
      <Route path={frontEndRoutes.home} element={<Home />} />
      {/* <Route path={frontEndRoutes.userProfile} element={<UserProfile/>} /> */}
      <Route path={frontEndRoutes.dish(':id')} element={<DishDetails />} />
      <Route path="/*" element={<Navigate replace to={'/login'} />} />
    </Routes>
  );
};

export default ChamaOChefeRoutes;
