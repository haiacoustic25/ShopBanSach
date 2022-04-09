import React from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Img/logo.png";
import emptyCart from "../../Assets/Img/empty-cart.png";
import products from "../../Assets/Img/ProductTest.png";

const Navbar = () => {
  return (
    <div className="body">
      <div className="row py-3">
        <div className="col-sm-2">
          <Link to="/">
            <img src={logo} alt="" width="218px" />
          </Link>
        </div>
        <div className="navbar__search col-sm-7 py-2">
          <Form>
            <InputGroup className="mb-3 navbar__search">
              <FormControl placeholder="Bạn Muốn Mua Gì?" />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                className="navbar__search--btn"
              >
                TÌM KIẾM
              </Button>
            </InputGroup>
          </Form>
        </div>
        <div className="col-sm-3 pb-3 d-flex justify-content-end ">
          <div className="navbar__cart">
            <div>
              Giỏ Hàng Của Bạn
              <i className="fas fa-shopping-cart">
                <div className="navbar__cart--count">0</div>
              </i>
            </div>
            <div className="cart">
              {/* <div className="cart__img">
                <img src={emptyCart} alt="" />
              </div> */}
              <div className="cart__product d-flex">
                <img src={products} alt="" className="cart__product--img" />

                <div className="cart__product--infor">
                  <div className="cart__product--infor-name">
                    10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2
                  </div>
                  <div className="cart__product--infor-price">
                    Giá tiền: 88,200 đ
                  </div>
                  <div className="cart__product--infor-quantity">
                    Số lượng: 1
                  </div>
                </div>
              </div>
              <div className="cart__product d-flex">
                <img src={products} alt="" className="cart__product--img" />

                <div className="cart__product--infor">
                  <div className="cart__product--infor-name">
                    10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2
                  </div>
                  <div className="cart__product--infor-price">
                    Giá tiền: 88,200 đ
                  </div>
                  <div className="cart__product--infor-quantity">
                    Số lượng: 1
                  </div>
                </div>
              </div>
              <div className="cart__all">
                <Link to="/cart">Xem tất cả </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
