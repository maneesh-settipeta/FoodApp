import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingItem > -1) {
      const existingPro = state.items[existingItem];
      const updateItem = {
        ...existingPro,
        quantity: existingPro.quantity + 1,
      };
      updatedItems[existingItem] = updateItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return {
      ...state,
      items: updatedItems,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingItem = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingItem];
    const updatedItems = [...state.items];
    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItem, 1);
    } else {
      const updatedItemSpliced = {
        ...existingCartItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingItem] = updatedItemSpliced;
    }
    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

export function CartProvider({ children }) {
  const [cart, dispatchCart] = useReducer(CartReducer, {
    items: [],
  });

  function addCart(item) {
    dispatchCart({ type: "ADD_ITEM", item });
  }
  function removeCart(id) {
    dispatchCart({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem: addCart,
    removeItem: removeCart,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
export default CartContext;
