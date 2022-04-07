import React from "react";
import { Carousel } from "react-bootstrap";
const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://theme.hstatic.net/1000363117/1000606112/14/ms_banner_img1.jpg?v=2124"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.tgdd.vn/hoi-dap/1369909/200-anh-lam-slide-powerpoint-cuc-dep-chuyen-nghiep-khong%20(121)-800x500.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hoanghapc.vn/media/news/328_h__nh_n___n_slide______p__65_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
