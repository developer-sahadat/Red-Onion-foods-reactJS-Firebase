import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    const url = `http://localhost:5000/food/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setFoodItem(result));
  }, [id]);

  const plusHandler = () => {
    const plus = count + 1;
    setCount(plus);
  };
  const minusHandler = () => {
    if (count > 1) {
      const minus = count - 1;
      setCount(minus);
    }
  };

  return (
    <div className="product-detail-container">
      <div className="container">
        <div className="row row-cols-md-2 justify-content-center align-items-center">
          <div>
            <h2>{foodItem?.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              veritatis autem possimus sint cum dolor fugiat debitis, quis
              totam, quas doloribus illum aperiam officia numquam.
            </p>
            <div className="minus-plus-btn">
              <span className="price">${foodItem?.Price}</span>

              <span className="minus-plus">
                <button onClick={plusHandler}>
                  <FontAwesomeIcon style={{ color: "red" }} icon={faPlus} />
                </button>
                {count}
                <button onClick={minusHandler}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </span>
            </div>
            <button className="add-cart-btn">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faShoppingCart}
              />
              Add
            </button>
          </div>
          <div>
            <img className="img-fluid" src={foodItem?.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
