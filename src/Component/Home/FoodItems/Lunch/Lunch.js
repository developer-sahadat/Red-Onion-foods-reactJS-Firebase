import React, { useEffect, useState } from "react";
import UseFood from "../../../../Hook/UseFood";
import Food from "../Food/Food";

const Lunch = () => {
  const [food] = UseFood();
  const [lunch, setLunch] = useState([]);

  useEffect(() => {
    const lunchFood = food.filter(
      (foods) => foods.name.toLowerCase() === "breakfast"
    );
    setLunch(lunchFood);
  }, [food]);

  return (
    <div>
      <div className="row row-cols-md-3 g-5">
        {lunch.map((food) => (
          <Food bFood={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default Lunch;
