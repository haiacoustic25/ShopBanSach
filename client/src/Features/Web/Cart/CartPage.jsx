import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import "../../../Assets/SCSS/cartPage.scss";
import product from "../../../Assets/Img/ProductTest.png";

const CartPage = () => {
  const [quantity, setQuantity] = useState(0);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleReductionQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    else setQuantity(0);
  };
  return (
    <div>
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
            <div className="text-uppercase px-2">/ Giỏ hàng</div>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Thông tin chi tiết sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Tổng giá</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={product} alt="" className="cartPage__img" />
              </td>
              <td className="cartPage__name">
                10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2
                <span>Xóa</span>
              </td>
              <td>88,200 đ</td>
              <td className="cartPage__quantity">
                <button onClick={handleReductionQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
              </td>
              <td>88,200 đ</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <div className="cartPage__total d-flex flex-row-reverse">
            Tổng tiền: 88,000 đ
          </div>
          <div className="cartPage__btn d-flex flex-row-reverse">
            <Button variant="success">Thanh toán</Button>{" "}
            <Button variant="success">Cập nhật</Button>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
