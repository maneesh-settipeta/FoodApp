import { useContext } from "react";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  function handleOpenCart() {
    showCart();
  }

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <>
      <div className="flex justify-between border border-b-2 h-12 ">
        <h1 className=" text-center self-center pl-3 text-lg font-medium">
          Order Food
        </h1>
        <button
          onClick={handleOpenCart}
          className="px-4 py-2 text-lg mr-1 font-medium  bg-red-500"
        >
          Cart({totalCartItems})
        </button>
      </div>
    </>
  );
}

export default Header;
