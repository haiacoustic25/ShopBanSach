import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="body">
        <div className="row">
          <div className=" col-sm-8 ">
            <ul className="topbar__left p-0">
              <li>
                <Link to="" className="topbar__right--link">
                  Hệ Thống Cửa Hàng
                </Link>
              </li>
              <li>
                <Link to="" className="topbar__right--link">
                  Liên Hệ Hỗ Trợ
                </Link>
              </li>
              <li>
                <Link to="" className="topbar__right--link">
                  Tin Tuyển Dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 ">
            <ul className="topbar__right">
              <li>
                <Link to="/login" className="topbar__right--link">
                  Đăng Nhập
                </Link>
              </li>
              <li>
                <Link to="/register" className="topbar__right--link">
                  Đăng Ký
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
