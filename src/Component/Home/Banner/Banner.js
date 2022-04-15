import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <img
          src="https://i.ibb.co/dM1FHS6/bannerbackground.png"
          alt="Snow"
          style={{ width: "100%" }}
        />

        <div className="centered">
          <h2>The best food is waiting for your belly</h2>
          <div>
            <InputGroup className=" w-75 mx-auto">
              <FormControl
                placeholder="search food items"
                aria-label="search food items"
                aria-describedby="basic-addon2"
                className="search-input"
              />
              <Button
                className="searchBtn"
                variant="outline-secondary"
                id="button-addon2"
              >
                Button
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
