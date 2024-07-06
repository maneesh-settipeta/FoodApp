import { useState, useEffect } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [allMeals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Error while fetching");
        }

        const responseData = await response.json();
        setMeals(responseData);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchMeals();
  }, []);

  return (
    <>
      <div className="bg-customColorBlue">
        <ul className="flex flex-wrap">
          {allMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default Meals;
