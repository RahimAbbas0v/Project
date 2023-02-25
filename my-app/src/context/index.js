import { createContext, useState } from "react";

export const Context = createContext();

const OrderId = ({ children }) => {
  const [list, setList] = useState([]);
  const data = {
    list,
    setList,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default OrderId;