import React from "react";
import { Button } from "react-bootstrap";
import "../../../../Assets/SCSS/pagination.scss";
const Pagination = () => {
  return (
    <div className="pagination d-flex align-items-center justify-content-between mt-4 mb-3">
      <Button variant="danger" className="w-50">
        Trang tiếp<i className="ml-2 fa-solid fa-arrow-right-long"></i>
      </Button>
      <div className="d-flex">
        <div className="pagination__btn icon">
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="pagination__btn"></div>
        <div className="pagination__btn icon">
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
