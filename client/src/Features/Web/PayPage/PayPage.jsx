import React, { useState, useEffect } from "react";
import PayInfor from "./PayInfor";
import PayProduct from "./PayProduct";
import "../../../Assets/SCSS/paypage.scss";
import Loading from "../../../Components/Loading/Loading";
import { dispatch, useSelector } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const PayPage = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state?.user?.user?.user);
  const isAuth = useSelector((state) => state?.user?.isAuth);
  const listProducts = useSelector((state) => state?.cart?.listProducts.books);
  const inforProduct = useSelector(
    (state) => state?.product.moveInforProductToPayload
  );
  const [payInfor, setPayInfor] = useState({
    pay_name: user ? user.name : "",
    pay_phone: user ? user.phone : "",
    pay_email: user ? user.email : "",
    pay_address: user ? user.address : "",
    pay_totalPrice: "",
  });
  useEffect(() => {
    if (!isAuth) {
      setProducts([...products, inforProduct]);
    } else {
      setProducts(listProducts);
    }
  }, [listProducts]);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsDisplay(true);
    }, 1000);
  }, [isDisplay]);
  const handlePay = (event) => {
    event.preventDefault();
    if (
      payInfor.pay_name === "" ||
      payInfor.pay_phone === "" ||
      payInfor.pay_email === "" ||
      payInfor.pay_address === ""
    ) {
      NotificationManager.error("Điền đầy đủ thông tin", "", 500);
    } else {
      console.log(payInfor);
    }
  };
  const onChange = (event) => {
    event.preventDefault();
    setPayInfor({ ...payInfor, [event.target.name]: event.target.value });
  };
  return (
    <>
      {isDisplay ? (
        <div className="d-flex paypage">
          <PayInfor
            isAuth={isAuth}
            payInfor={payInfor}
            handlePay={handlePay}
            onChange={onChange}
          />
          <PayProduct products={products} isAuth={isAuth} />
          <NotificationContainer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PayPage;
