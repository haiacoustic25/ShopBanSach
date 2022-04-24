import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="body">
      <div className="row menu">
        <div className="d-flex col-sm-2 align-items-center">
          <div className="menu__list--item">
            <div className="menu__dropdown d-flex align-items-center">
              <i className="fas fa-bars"></i>
              <div>DANH MỤC SẢN PHẨM</div>
            </div>
            <div className="dropdown-content">
              <Link
                to=""
                className="d-flex align-items-center justify-content-between"
              >
                Sách Tiếng Việt<i className="fas fa-angle-right"></i>
              </Link>
              <Link to="">Sách Ngoại Văn</Link>
              <Link
                to=""
                className="d-flex  align-items-center justify-content-between"
              >
                Văn Phòng Phẩm<i className="fas fa-angle-right"></i>
              </Link>
              <Link
                to=""
                className="d-flex  align-items-center justify-content-between"
              >
                Đồ Chơi
                <i className="fas fa-angle-right"></i>
              </Link>
              <Link to="">Đồ Trang Trí-Lưu Niệm</Link>
              <Link
                to=""
                className="d-flex  align-items-center justify-content-between"
              >
                Nhà Cung Cấp<i className="fas fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="list d-flex col-sm-10">
          <div className="list-item">Sách có Chữ Kí</div>
          <div className="list-item">Sách Thiếu Nhi</div>
          <div className="list-item">Trinh Thám</div>
          <div className="list-item">Gợi Ý Cho Bạn</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
