import React from "react";
import UseFood from "../../../../Hook/UseFood";
import Food from "../Food/Food";

const Dinner = () => {
  const [food] = UseFood();
  return (
    <div>
      <div className="row row-cols-md-3 g-5">
        {food.slice(12, 18).map((food) => (
          <Food bFood={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};

export default Dinner;
