import React from "react";
import PayInfor from "./PayInfor";
import PayProduct from "./PayProduct";
import "../../../Assets/SCSS/paypage.scss";
const PayPage = () => {
  return (
    <div className="d-flex paypage">
      <PayInfor />
      <PayProduct />
    </div>
  );
};

export default PayPage;
