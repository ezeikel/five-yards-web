import { createContext } from "react";

const MenuContext = createContext({
  active: false,
  toggle: () => {},
});

export default MenuContext;
