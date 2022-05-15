import React from "react";
import ProductTest from "../../../Assets/Img/ProductTest.png";
const PayProduct = () => {
  
  return (
    <div className="payProduct">
      <div className="payProduct__list">
        <div className="payProduct__item d-flex">
          <div className="payProduct__item--img">
            <img src={ProductTest} alt="" />
          </div>
          <div className="payProduct__item--infor">
            <div className="payProduct__item--infor-name">
              Tam Quốc Diến nghĩa Tam Quốc Diến nghĩa Tam Quốc Diến nghĩa
            </div>
            <div className="payProduct__item--infor-quantity">
              Số lượng : x2
            </div>
          </div>
          <div className="payProduct__item--total">312.000 đ</div>
        </div>
      </div>
      <div className="payProduct__total mt-3 d-flex justify-content-between">
        <h4>Tổng tiền</h4>
        <div>
          <span>VND</span> 312.000 đ
        </div>
      </div>
    </div>
  );
};

export default PayProduct;
