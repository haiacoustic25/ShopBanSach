import React, { useState, useEffect } from "react";
import "../../../../../Assets/SCSS/products.scss";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import Pagination from "../Pagination";
const Products = () => {
  const [product] = useState({
    id: 1,
    name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
    newPrice: "88,200",
    oldPrice: "98,000",
    discount: "10",
  });

  return (
    <div className="body">
      <Filter />
      <div className="col-sm-12">
        <div className="row">
          <ProductItem {...product} />
          {/* <ProductItem />
          <ProductItem />
          <ProductItem /> */}
        </div>
      </div>
      <Pagination/>
    </div>
  );
};

export default Products;
