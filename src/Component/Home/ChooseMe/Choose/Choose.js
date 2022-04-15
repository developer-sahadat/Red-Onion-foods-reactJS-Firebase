import React from "react";
import "./Choose.css";
import groupIcon1 from "../../../../Assets/images/icons/Group 204.png";
import groupIcon2 from "../../../../Assets/images/icons/Group 1133.png";
import groupIcon3 from "../../../../Assets/images/icons/Group 245.png";
import arrayRight from "../../../../Assets/images/icons8-circled-right-48 (1).png";

const Choose = ({ choose }) => {
  const { title, description, img } = choose;
  return (
    <div>
      <div className={`choose ${choose.id === 2 ? "shadow rounded" : ""}`}>
        <div>
          <img className="img-fluid" src={img} alt="" />
          <div className="title">
            <span>
              <img
                src={
                  choose.id === 1
                    ? groupIcon1
                    : choose.id === 2
                    ? groupIcon2
                    : groupIcon3
                }
                alt=""
              />
            </span>
            <h3>{title}</h3>
          </div>
          <div className="px-4 py-3 mt-3">
            <p>{description}</p>
            <button className="seeMore">
              See More <img style={{ width: "25px" }} src={arrayRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
