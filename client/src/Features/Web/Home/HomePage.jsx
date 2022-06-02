import React, { useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Slider from "./Component/Slider";
import "../../../Assets/SCSS/slider.scss";
import Footer from "../../../Components/Footer/Footer";
import Products from "./Component/Products/Products";
import { Helmet } from "react-helmet";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Trang Chủ</title>
      </Helmet>
      <Header />

      <Slider />
      <Products />

      <Footer />
    </div>
  );
};

export default HomePage;
