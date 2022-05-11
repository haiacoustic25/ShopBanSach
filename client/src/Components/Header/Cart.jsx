import React from "react";
const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart__product d-flex">
      <img src={products} alt="" className="cart__product--img" />
      <div className="cart__product--infor">
        <div className="cart__product--infor-name">
          10 CHUYÊN ĐỀ BỒI DƯỠNG HỌC SINH GIỎI TOÁN - TIẾNG VIỆT 2
        </div>
        <div className="cart__product--infor-price">Giá tiền: 88,200 đ</div>
        <div className="cart__product--infor-quantity">Số lượng: 1</div>
      </div>
    </div>
  );
};

export default Cart;
