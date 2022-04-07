import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Slider from "./Component/Slider";
import "../../../Assets/SCSS/slider.scss";
import Footer from "../../../Components/Footer/Footer";
import Products from "./Component/Products/Products";
import Pagination from "./Component/Pagination";

const HomePage = () => {
  
  return (
    <>
      <Header />
      <Slider />
      <Products />
      
      <Footer />
    </>
  );
};

export default HomePage;
