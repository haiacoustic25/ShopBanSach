import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Table, Modal } from "react-bootstrap";
import { Button } from "@mui/material";

import "../../../Assets/SCSS/cartPage.scss";

import { useSelector, useDispatch } from "react-redux";
import { deleteProductInCartRedux } from "../../../Redux/Action/action";

const CartPage = () => {
  const listProducts = useSelector((state) => state?.cart?.listProducts.books);
  const user = useSelector((state) => state?.user?.user?.user);
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const [bookIdDelete, setBookIdDelete] = useState();
  const handleShow = (id) => {
    setBookIdDelete(id);
    setShow(true);
  };

  const handleDeleteProductInCart = () => {
    dispatch(
      deleteProductInCartRedux(
        { cart_id: user.id, book_id: bookIdDelete },
        user.username
      )
    );
    handleClose();
  };

  const totalPriceInCart = () => {
    let total = 0;
    listProducts.forEach((element) => {
      total += Number(element?.s_newPrice * element?.s_amount);
    });
    return total;
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
            {listProducts.length > 0 ? (
              listProducts.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={`http://localhost:8000/uploads/book/${product.s_image}`}
                      alt=""
                      className="cartPage__img"
                    />
                  </td>
                  <td className="cartPage__name">
                    {product.s_name}
                    <span onClick={() => handleShow(product.id)}>Xóa</span>
                  </td>
                  <td>
                    {Number(product?.s_newPrice).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td className="cartPage__quantity">
                    <span>{product.s_amount}</span>
                  </td>
                  <td>
                    {Number(
                      product?.s_newPrice * product?.s_amount
                    ).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
              ))
            ) : (
              <h2 className="mt-4">Không có sản phẩm</h2>
            )}
          </tbody>
        </Table>
        <div>
          <div className="cartPage__total d-flex flex-row-reverse">
            Tổng tiền:{" "}
            {totalPriceInCart().toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}{" "}
          </div>
          <div className="cartPage__btn d-flex flex-row-reverse">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#00ab9f",
              }}
            >
              <Link to="/thanh-toan" style={{ color: "#fff" }}>
                Thanh toán
              </Link>
            </Button>
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
            onClick={handleDeleteProductInCart}
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
