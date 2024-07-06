import { createContext, useState } from "react";

const UserProgressContext = createContext({
  userprogress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
});

export function UserProgressProvider({ children }) {
  const [cartStatus, setCartStatus] = useState("");

  function showCart() {
    setCartStatus("cart");
  }
  function hideCart() {
    setCartStatus("");
  }
  function showCheckOut() {
    setCartStatus("checkout");
  }
  function hideCheckOut() {
    setCartStatus("");
  }

  const cntCartValues = {
    userprogress: cartStatus,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };
  return (
    <UserProgressContext.Provider value={cntCartValues}>
      {children}
    </UserProgressContext.Provider>
  );
}
export default UserProgressContext;
