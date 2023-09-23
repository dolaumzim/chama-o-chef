import { createContext, useContext, useState } from "react";
import { AddressProps } from "../services/structure";


interface AddressContextType {
  addresses : AddressProps
  setAddresses : React.Dispatch<React.SetStateAction<AddressProps>>
}

const AddressContext = createContext<AddressContextType>({
    addresses : {} as AddressProps,
    setAddresses : () => {},
});

export const AddressProvider = ({ children }: React.PropsWithChildren) => {

    const [addresses, setAddresses] = useState<AddressProps>({} as AddressProps);

  return (
    <AddressContext.Provider
      value={{
        addresses, 
        setAddresses
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const ctx = useContext(AddressContext);
  if (ctx === undefined) {
    throw new Error("Tem que ser usado dentro de um Provider");
  }
  return ctx;
};
