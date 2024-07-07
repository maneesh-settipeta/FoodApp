import Modal from "./UI/Modal";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
function Cart() {
  const { items } = useContext(CartContext);
  const { userprogress, hideCart } = useContext(UserProgressContext);
  const totalCount = items.reduce(
    (totalCoutItems, item) => totalCoutItems + item.quantity * item.price,
    0
  );

  return (
    <Modal open={userprogress === "cart"}>
      <div className="dialog">
        <h2>Your Items</h2>
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}-{item.quantity}
              </li>
            ))}
          </ul>
          <p>Total{totalCount}</p>
        </div>
        <div className="modal-footer">
          <button
            className="closeBtn"
            onClick={() => {
              hideCart();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
export default Cart;
