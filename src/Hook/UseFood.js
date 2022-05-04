import { useEffect, useState } from "react";

const UseFood = (isReload) => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [isReload]);

  return [food, setFood];
};

export default UseFood;
