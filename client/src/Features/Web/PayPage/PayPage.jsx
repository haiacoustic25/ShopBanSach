import React, { useState, useEffect } from "react";
import PayInfor from "./PayInfor";
import PayProduct from "./PayProduct";
import "../../../Assets/SCSS/paypage.scss";
import Loading from "../../../Components/Loading/Loading";
import { dispatch, useSelector } from "react-redux";
import axios from "axios";
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
    pay_name: user.name,
    pay_phone: user.phone,
    pay_email: user.email,
    pay_address: user.address,
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
  const handlePay = async (event) => {
    event.preventDefault();
    if (payInfor.pay_address === "") {
      NotificationManager.error("Điền đầy đủ thông tin", "", 500);
    } else {
      const res = await axios.post("http://localhost:8000/api/pay", {
        cart_id: user.id,
        bill_address: payInfor.pay_address,
        bill_phone: payInfor.pay_phone,
        bill_email: payInfor.pay_email,
        bill_total: total(),
      });
      NotificationManager.success("Thanh toán thành công", "", 500);

      console.log(payInfor);
    }
  };
  const total = () => {
    let totalPrice = 0;
    products.map((product) => {
      totalPrice += product.s_newPrice * product.s_amount;
    });
    return totalPrice;
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
          <PayProduct products={products} isAuth={isAuth} total={total} />
          <NotificationContainer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PayPage;
