import React from "react";
import Banner from "../Banner/Banner";
import ChooseMe from "../ChooseMe/ChooseMe";
import FoodItems from "../FoodItems/FoodItems/FoodItems";

const Home = () => {
  return (
    <>
      <Banner />
      <FoodItems />
      <ChooseMe />
    </>
  );
};

export default Home;
