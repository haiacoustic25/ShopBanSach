import React from "react";
import { Button } from "react-bootstrap";
import "../../../../Assets/SCSS/pagination.scss";
const Pagination = (props) => {
  const {
    currentPage,
    handleNextPage,
    handleComeBackPage,
    currentProductLength,
  } = props;

  return (
    <div className="pagination d-flex align-items-center justify-content-between mt-4 mb-3">
      <Button
        variant="Success"
        className="w-50"
        onClick={handleNextPage}
        disabled={currentProductLength < 12 ? true : false}
      >
        Trang tiếp<i className="ml-2 fa-solid fa-arrow-right-long"></i>
      </Button>
      <div className="d-flex">
        <Button className="pagination__btn icon" onClick={handleComeBackPage}>
          <i className="fa-solid fa-angle-left"></i>
        </Button>
        <div className="pagination__btn">{currentPage}</div>
        <Button
          className="pagination__btn icon"
          onClick={handleNextPage}
          disabled={currentProductLength < 12 ? true : false}
        >
          <i className="fa-solid fa-angle-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
