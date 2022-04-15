import React from "react";
import "./ChooseMe.css";
import img1 from "../../../Assets/images/adult-blur-blurred-background-687824.png";
import img2 from "../../../Assets/images/chef-cook-food-33614.png";
import img3 from "../../../Assets/images/architecture-building-city-2047397.png";
import Choose from "./Choose/Choose";

const ChooseMe = () => {
  const chooseMeDetails = [
    {
      title: "Fast Delivery",
      description:
        "Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.",
      img: img1,
      id: 1,
    },
    {
      title: "A Good Auto Responder",
      description:
        "Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.",
      img: img2,
      id: 2,
    },
    {
      title: "Home Delivery",
      description:
        "Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.",
      img: img3,
      id: 3,
    },
  ];

  return (
    <div>
      <div className="container my-5 mx-auto">
        <div className="choose-header">
          <h2>Why you choose us</h2>
          <p>
            Barton waited twenty always repair in within we do. An delighted
            offending curiosity my is dashwoods at. boy prosperous increasing
            surrounded.
          </p>
        </div>

        <div className="row row-cols-lg-3 row-cols-md-2  g-3">
          {chooseMeDetails.map((choose) => (
            <Choose choose={choose} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseMe;
