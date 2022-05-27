import React, { useState, useEffect } from "react";
import "../../../../../Assets/SCSS/products.scss";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import Pagination from "../Pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../../../Redux/Action/action";
const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const products = useSelector((state) => state.product.listProducts.books);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  let currentProduct;
  if (products) {
    currentProduct = products?.slice(indexOfFirstProduct, indexOfLastProduct);
  }
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 800);
  };
  const handleComeBackPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1); 
    window.scrollTo(0, 800);
  };
  return (
    <div className="body">
      <Filter />
      <div className="grid grid-cols-6 gap-3 ">
        <div className="row">
          {products &&
            currentProduct.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handleComeBackPage={handleComeBackPage}
        currentProductLength={currentProduct?.length}
      />
    </div>
  );
};

export default Products;
