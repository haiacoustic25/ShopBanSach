import React, { useState, useEffect } from "react";
import PayInfor from "./PayInfor";
import PayProduct from "./PayProduct";
import "../../../Assets/SCSS/paypage.scss";
import Loading from "../../../Components/Loading/Loading";
const PayPage = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsDisplay(true);
    }, 1000);
  }, [isDisplay]);
  return (
    <>
      {isDisplay ? (
        <div className="d-flex paypage">
          <PayInfor />
          <PayProduct />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PayPage;
