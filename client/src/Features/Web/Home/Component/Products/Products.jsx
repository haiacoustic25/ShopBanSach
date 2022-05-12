import React, { useState } from "react";
import "../../../../../Assets/SCSS/products.scss";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import Pagination from "../Pagination";
const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
    {
      id: 1,
      name: "10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2",
      newPrice: "88,200",
      oldPrice: "98,000",
      discount: "10",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 1000);
  };
  const handleComeBackPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    window.scrollTo(0, 1000);
  };
  return (
    <div className="body">
      <Filter />
      <div className="grid grid-cols-6 gap-3 ">
        <div className="row">
          {products &&
            currentProduct.map((product, index) => (
              <ProductItem product={product} />
            ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handleComeBackPage={handleComeBackPage}
        currentProductLength={currentProduct.length}
      />
    </div>
  );
};

export default Products;
