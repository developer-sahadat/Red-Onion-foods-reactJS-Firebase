import React from "react";
import { NavLink } from "react-router-dom";
import "./FoodItems.css";

const FoodItems = () => {
  return (
    <div className="container">
      <div className="foodItems">
        <NavLink className="link" to="/breakfast">
          Breakfast
        </NavLink>
        <NavLink className="link" to="/lunch">
          Lunch
        </NavLink>
        <NavLink className="link" to="/dinner">
          Dinner
        </NavLink>
      </div>
    </div>
  );
};

export default FoodItems;
