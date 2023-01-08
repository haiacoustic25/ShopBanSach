import React, { Suspense, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import Slider from "./Component/Slider";
import "../../../Assets/SCSS/slider.scss";
import Footer from "../../../Components/Footer/Footer";
import { Helmet } from "react-helmet";
const Products = React.lazy(() => import("./Component/Products/Products"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>

      <Footer />
    </div>
  );
};

export default HomePage;
