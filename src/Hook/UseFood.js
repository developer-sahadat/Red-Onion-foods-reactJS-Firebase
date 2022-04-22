import { useEffect, useState } from "react";

const UseFood = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  return [food, setFood];
};

export default UseFood;
