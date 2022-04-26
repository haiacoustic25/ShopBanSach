import React from "react";
import Header from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import "../../../Assets/SCSS/accountPage.scss";
const Account = () => {
  return (
    <>
      <Header />
      <div className="body">
        <div className="row ">
          <div
            className="d-flex my-2"
            style={{
              fontSize: 14,
            }}
          >
            <Link to="/">TRANG CHỦ</Link>
            <div className="text-uppercase px-2">/ TÀI KHOẢN</div>
          </div>
        </div>
        <div className="account d-flex">
          <div className="account__img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
              alt=""
            />
          </div>
          <div className="account__infor d-flex">
            <div className="account__infor--row">
              <span>Hồ Minh Hải</span>
              <span>admin</span>
            </div>
            <div className="account__infor--row">
              <span>Địa chỉ</span>
              <span>Tân Kỳ - Nghệ An</span>
            </div>
            <div className="account__infor--row">
              <span>Số điện thoại</span>
              <span>0123456789</span>
            </div>
          </div>
        </div>
        <div className="historyTransaction">
          <h4>Lịch sử giao dịch</h4>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
