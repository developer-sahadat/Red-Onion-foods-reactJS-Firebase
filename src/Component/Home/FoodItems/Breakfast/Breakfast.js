import React from "react";
import UseFood from "../../../../Hook/UseFood";

const Breakfast = () => {
  console.log("laka");
  const [food, setFood] = UseFood();

  console.log(food, "hi");

  return <div></div>;
};

export default Breakfast;
