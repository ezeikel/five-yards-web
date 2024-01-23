import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type MenuContextType = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType>({
  active: false,
  setActive: () => {},
});

export const MenuContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MenuContext.Provider value={{ active, setActive }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuContextProvider');
  }

  return context;
};
