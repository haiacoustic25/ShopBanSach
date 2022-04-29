import React from "react";
import { Button } from "react-bootstrap";
import "../../../../Assets/SCSS/pagination.scss";
const Pagination = (props) => {
  const { currentPage, handleNextPage, handleComeBackPage } = props;

  return (
    <div className="pagination d-flex align-items-center justify-content-between mt-4 mb-3">
      <Button variant="Success" className="w-50" onClick={handleNextPage}>
        Trang tiếp<i className="ml-2 fa-solid fa-arrow-right-long"></i>
      </Button>
      <div className="d-flex">
        <div className="pagination__btn icon" onClick={handleComeBackPage}>
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="pagination__btn">{currentPage}</div>
        <div className="pagination__btn icon" onClick={handleNextPage}>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
