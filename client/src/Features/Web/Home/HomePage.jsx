import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Slider from "./Component/Slider";
import "../../../Assets/SCSS/slider.scss";
import Footer from "../../../Components/Footer/Footer";
import Products from "./Component/Products/Products";
import Loading from "../../../Components/Loading/Loading";

const HomePage = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsDisplay(true);
    }, 1000);
  }, [isDisplay]);
  return (
    <div>
      <Header />
      {isDisplay ? (
        <>
          <Slider />
          <Products />
        </>
      ) : (
        <Loading />
      )}

      <Footer />
    </div>
  );
};

export default HomePage;
