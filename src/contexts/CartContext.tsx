import { createContext, useContext, useEffect, useState } from 'react';
import { DishData, OrderProps, PropsClient } from '../services/structure';
import { getClient } from '../services/Clients/getClient';
import secureLocalStorage from 'react-secure-storage';

interface CartContextType {
  cartItems: DishData[];
  setCartItems: React.Dispatch<React.SetStateAction<DishData[]>>;
  amount: number | null;
  setAmount: React.Dispatch<React.SetStateAction<number | null>>;
  userData: PropsClient;
  setUserData: React.Dispatch<React.SetStateAction<PropsClient>>;
  loading: boolean;
  order: OrderProps[];
  setOrder: React.Dispatch<React.SetStateAction<OrderProps[]>>;
  isCartVisible: boolean;
  setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextType>({
  cartItems: [{}] as DishData[],
  setCartItems: () => {},
  isCartVisible: true,
  setIsCartVisible: () => {},
  amount: null,
  setAmount: () => null,
  userData: {} as PropsClient,
  setUserData: () => {},
  loading: true,
  order: [] as OrderProps[],
  setOrder: () => {}
});



export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const storedUserData = JSON.parse(secureLocalStorage.getItem('userData') as string);
  const storedCartItems = JSON.parse(secureLocalStorage.getItem('cartItems') as string);
  const storedIsCartVisible = JSON.parse(secureLocalStorage.getItem('isCartVisible') as string);


  const [cartItems, setCartItems] = useState<DishData[]>(storedCartItems || []);
  const [amount, setAmount] = useState<number | null>(null);
  const [userData, setUserData] = useState<PropsClient>(storedUserData || {});
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<OrderProps[]>([] as OrderProps[]);
  const [isCartVisible, setIsCartVisible] = useState(storedIsCartVisible) || false;

  const userInfo = async () => {
    try {
      const response = await getClient();
      setUserData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    userInfo();

  }, []);

  useEffect(() => {
    secureLocalStorage.setItem('userData',JSON.stringify(userData));
    secureLocalStorage.setItem('cartItems', JSON.stringify(cartItems));
    secureLocalStorage.setItem('isCartVisible', JSON.stringify(isCartVisible));
  }, [userData,cartItems,isCartVisible]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
        amount,
        setAmount,
        userData,
        setUserData,
        loading,
        order,
        setOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (ctx === undefined) {
    throw new Error('Tem que ser usado dentro de um Provider');
  }
  return ctx;
};
