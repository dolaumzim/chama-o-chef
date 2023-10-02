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
import { UserProfile } from '../pages/UserProfile';
import { CartProvider } from '../contexts/CartContext';
import { AllDishes } from '../pages/AllDishes';

const ChamaOChefeRoutes = () => {
  const authenticated = localStorage.getItem('token');

  if (!authenticated)
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
        </Route>
        <Route
          path="/*"
          element={<Navigate replace to={frontEndRoutes.login} />}
        />
      </Routes>
    );
  else
    return (
      <CartProvider>
        <Routes>
          {/* <Route path="/location" element={<Locationteste />} /> */}
          <Route path={frontEndRoutes.home} element={<Home />} />
          <Route path={frontEndRoutes.userProfile} element={<UserProfile />} />
          <Route path={frontEndRoutes.dish(':id')} element={<DishDetails />} />
          <Route path={frontEndRoutes.dishes} element={<AllDishes />} />
          <Route
            path="/*"
            element={<Navigate replace to={frontEndRoutes.home} />}
          />
        </Routes>
      </CartProvider>
    );
};

export default ChamaOChefeRoutes;
