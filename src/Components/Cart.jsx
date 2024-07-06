import Modal from "./UI/Button";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
function Cart() {
  const { items } = useContext(CartContext);
  const { userprogress } = useContext(UserProgressContext);
  const totalCount = items.reduce(
    (totalCoutItems, item) => totalCoutItems + item.quantity * item.price,
    0
  );
  console.log(userprogress);

  return (
    <Modal open={userprogress === "cart"}>
      <h2>Your Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}-{item.quantity}
          </li>
        ))}
      </ul>
      <p>Total{totalCount}</p>
    </Modal>
  );
}
export default Cart;
