import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UseFood from "../../../../Hook/UseFood";
import Breakfast from "../Breakfast/Breakfast";
import "./FoodItems.css";

const FoodItems = () => {
  const [food] = UseFood();
  return (
    <div className="container">
      <div className="foodItems">
        <NavLink className="link" to="/">
          Breakfast
        </NavLink>
        <NavLink className="link" to="/lunch">
          Lunch
        </NavLink>
        <NavLink className="link" to="/dinner">
          Dinner
        </NavLink>
      </div>

      <div className="container p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default FoodItems;
