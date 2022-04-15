import React from "react";
import "./Food.css";

const Food = ({ bFood }) => {
  const { title, img, description, Price } = bFood;
  return (
    <div>
      <div
        className={`food ${
          bFood.id === 2
            ? "shadow"
            : bFood.id === 8
            ? "shadow"
            : bFood.id === 14
            ? "shadow"
            : ""
        }`}
      >
        <div>
          <img src={img} className="img-fluid" alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
          <h6>${Price}</h6>
        </div>
      </div>
    </div>
  );
};

export default Food;
