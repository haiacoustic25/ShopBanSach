import React, { useState, useEffect } from "react";
import PayInfor from "./PayInfor";
import PayProduct from "./PayProduct";
import "../../../Assets/SCSS/paypage.scss";
import Loading from "../../../Components/Loading/Loading";
import { dispatch, useSelector } from "react-redux";

const PayPage = () => {
  const [payInfor, setPayInfor] = useState({
    pay_name: "",
    pay_contact: "",
    pay_email: "",
    pay_address: "",
    pay_totalPrice: "",
  });
  const [isDisplay, setIsDisplay] = useState(false);
  const user = useSelector((state) => state?.user?.user?.user);
  const isAuth = useSelector((state) => state?.user?.isAuth);
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
          <PayInfor
            user={user}
            isAuth={isAuth}
            payInfor={payInfor}
            setPayInfor={setPayInfor}
          />
          <PayProduct />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PayPage;
