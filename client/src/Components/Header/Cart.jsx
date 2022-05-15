import React from "react";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart__product d-flex">
      <img
        src={require(`../../Assets/Img/${products.s_image}`).default}
        alt=""
        className="cart__product--img"
      />
      <div className="cart__product--infor">
        <div className="cart__product--infor-name">{products?.s_name}</div>
        <div className="cart__product--infor-price">
          Giá tiền:{" "}
          {Number(products?.s_price).toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}{" "}
        </div>
        <div className="cart__product--infor-quantity">
          Số lượng: {products?.s_amount}
        </div>
      </div>
    </div>
  );
};

export default Cart;
