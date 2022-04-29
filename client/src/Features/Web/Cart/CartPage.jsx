import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Table, Button, Modal } from "react-bootstrap";
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

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <Table>
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
                <span onClick={handleShow}>Xóa</span>
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
            <Button variant="success">Thanh toán</Button>
            <Button variant="success">Cập nhật</Button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Xóa sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có đồng ý xóa sản phẩm hay không</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{
              backgroundColor: "#00ab9f",
            }}
          >
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
};

export default CartPage;
