import React from "react";
const PayProduct = (props) => {
  const { products, isAuth } = props;
  const total = () =>{
    
  };
  return (
    <div className="payProduct">
      <div className="payProduct__list">
        {products.map((product, index) => (
          <div className="payProduct__item d-flex" key={index}>
            <div className="payProduct__item--img">
              <img
                src={`http://localhost:8000/uploads/book/${product.s_image}`}
                alt=""
              />
            </div>
            <div className="payProduct__item--infor">
              <div className="payProduct__item--infor-name">
                {product.s_name}
              </div>
              <div className="payProduct__item--infor-quantity">
                Số lượng : x{isAuth ? product.s_amount : 1}
              </div>
            </div>
            <div className="payProduct__item--total">
              {isAuth
                ? (
                    Number(
                      product.s_price -
                        (product.s_price * product.s_discount) / 100
                    ) * product.s_amount
                  ).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })
                : Number(
                    product.s_price -
                      (product.s_price * product.s_discount) / 100
                  ).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="payProduct__total mt-3 d-flex justify-content-between">
        <h4>Tổng tiền</h4>
        <div>
          <span>VND</span>{" "}
          {Number(
            product.s_price -
              (product.s_price * product.s_discount) / 100
          ).toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      </div> */}
    </div>
  );
};

export default PayProduct;
