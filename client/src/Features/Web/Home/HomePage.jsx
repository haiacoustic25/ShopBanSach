import React from "react";
import Header from "../../../Components/Header/Header";
import Slider from "./Component/Slider";
import "../../../Assets/SCSS/slider.scss";
import Footer from "../../../Components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <Footer />
    </>
  );
};

export default HomePage;
