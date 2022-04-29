import React from "react";
import Header from "../../../Components/Header/Header";
import Slider from "./Component/Slider";
import "../../../Assets/SCSS/slider.scss";
import Footer from "../../../Components/Footer/Footer";
import Products from "./Component/Products/Products";

const HomePage = () => {
  return (
    <div>
      <Header />

      <Slider />
      <Products />

      <Footer />
    </div>
  );
};

export default HomePage;
