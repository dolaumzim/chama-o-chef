import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import RecoverPassword from '../pages/RecoverPassword';
import Home from '../pages/Home';
import { PublicSectionLayout } from '../components/PublicSectionLayout';
import { SignUp } from '../pages/SignUp';
import { frontEndRoutes } from '.';
import { DishDetails } from '../pages/DishDetails';
import { UserProfile } from '../pages/UserProfile';
import { CartProvider } from '../contexts/CartContext';
import { AllDishes } from '../pages/AllDishes';
import { ReviewOrder } from '../components/ReviewOrder';

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
          <Route path={frontEndRoutes.home} element={<Home />} />
          <Route path={frontEndRoutes.userProfile} element={<UserProfile />} />
          <Route path={frontEndRoutes.dish(':id')} element={<DishDetails />} />
          <Route path={frontEndRoutes.dishes} element={<AllDishes />} />
          <Route
            path="/*"
            element={<Navigate replace to={frontEndRoutes.home} />}
          />
          <Route
            path={frontEndRoutes.reviewOrder(':orderId')}
            element={<ReviewOrder />}
          />
        </Routes>
      </CartProvider>
    );
};

export default ChamaOChefeRoutes;
