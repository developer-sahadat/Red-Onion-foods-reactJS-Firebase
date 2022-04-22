import React, { useEffect, useState } from "react";
import UseFood from "../../../../Hook/UseFood";
import Food from "../Food/Food";

const Breakfast = () => {
  const [food] = UseFood();
  const [breakfast, setDreakfast] = useState([]);

  useEffect(() => {
    const breakfastFood = food.filter(
      (foods) => foods.name.toLowerCase() === "breakfast"
    );
    setDreakfast(breakfastFood);
  }, [food]);

  return (
    <div className="row row-cols-md-3 g-5">
      {breakfast.map((food) => (
        <Food bFood={food} key={food._id} />
      ))}
    </div>
  );
};

export default Breakfast;
