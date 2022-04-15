import React from "react";
import UseFood from "../../../../Hook/UseFood";
import Food from "../Food/Food";

const Breakfast = () => {
  const [food] = UseFood();

  return (
    <div className="row row-cols-md-3 g-5">
      {food.slice(0, 6).map((food) => (
        <Food bFood={food} key={food.id} />
      ))}
    </div>
  );
};

export default Breakfast;
