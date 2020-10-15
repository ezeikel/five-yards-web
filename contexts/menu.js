import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [active, setActive] = useState();

  return (
    <MenuContext.Provider value={[active, setActive]}>
      {children}
    </MenuContext.Provider>
  );
};
