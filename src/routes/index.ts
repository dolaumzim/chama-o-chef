export const frontEndRoutes = {
    login: "/login",
    home: "/home",
    signup: "/signup",
    forgotPassword: "/forgot-password",
    recoverPassword: "/recover-password",
    dishes: "/dishes",
    dish: (id:string = ":id") => `/dishes/${id}`,
    favorites: (id: string = ":id") => `/${id}/favorites`,
    category: (category: string = ":category") => `/${category}`,
    settings: "/settings",
    checkout: "/checkout",
    userProfile: "/profile"
  };
  