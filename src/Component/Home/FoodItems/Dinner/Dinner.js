import React, { useEffect, useState } from "react";
import UseFood from "../../../../Hook/UseFood";
import Food from "../Food/Food";

const Dinner = () => {
  const [food] = UseFood();
  const [dinner, setDinner] = useState([]);

  useEffect(() => {
    const dinnerFood = food.filter(
      (foods) => foods.name.toLowerCase() === "dinner"
    );
    setDinner(dinnerFood);
  }, [food]);
  return (
    <div>
      <div className="row row-cols-md-3 g-5">
        {dinner.map((food) => (
          <Food bFood={food} key={food._id} />
        ))}
      </div>
    </div>
  );
};

export default Dinner;
