import { createContext, useContext, useEffect, useState } from "react";
import { DishData, OrderProps, PropsClient } from "../services/structure";
import { getClient } from "../services/Clients/getClient";



interface CartContextType {
  cartItems : DishData,
  setCartItems : React.Dispatch<React.SetStateAction<DishData>>,
  amount : number|null,
  setAmount : React.Dispatch<React.SetStateAction<number|null>>,
  userData : PropsClient,
  setUserData : React.Dispatch<React.SetStateAction<PropsClient>>,
  loading : boolean,
  order : OrderProps[],
  setOrder : React.Dispatch<React.SetStateAction<OrderProps[]>>,
}

const CartContext = createContext<CartContextType>({
    cartItems : {} as DishData,
    setCartItems : () => {},
    amount : null,
    setAmount: () => null,
    userData : {} as PropsClient,
    setUserData : () => {},
    loading : true,
    order : [] as OrderProps[],
    setOrder : () => {},
});

export const CartProvider = ({ children }: React.PropsWithChildren) => {

    const [cartItems, setCartItems] = useState<DishData>({} as DishData);
    const [amount, setAmount] = useState<number|null>(null);
    const [userData, setUserData] = useState<PropsClient>({} as PropsClient);
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState<OrderProps[]>([] as OrderProps[])
    
    const userInfo = async () =>{
      try {
        const response = await getClient()
        setUserData(response)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }

  useEffect(()=>{
    userInfo()
  },[])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        amount,
        setAmount,
        userData,
        setUserData,
        loading,
        order,
        setOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (ctx === undefined) {
    throw new Error("Tem que ser usado dentro de um Provider");
  }
  return ctx;
};
