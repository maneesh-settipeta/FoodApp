import { currencyFormatter } from "../util/formatting.js";
import { useContext } from "react";
import CartContext from "../Store/CartContext.jsx";

function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);

  function handleAddItem() {
    addItem(meal);
  }
  return (
    <>
      <div className="bg-white m-5 h-96 w-56 rounded-md">
        <img
          className="h-60 w-56 rounded-md"
          src={`http://localhost:3000/${meal.image}`}
        />
        <div>
          <h1 className="text-base font-medium text-center ">{meal.name}</h1>
          <p className="text-sm font-medium text-red-600 text-center p-1 bg-orange-100 ">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className=" h-14 text-xs text-wrap max-w-xs  truncate">
            {meal.description}
          </p>
        </div>
        <div className="text-center ">
          <button
            onClick={handleAddItem}
            className="text-sm  font-medium p-1 rounded-sm bg-customColorYellow "
          >
            Add to cart{" "}
          </button>
        </div>
      </div>
    </>
  );
}
export default MealItem;
