import React, { useState, useEffect } from "react";
import PayInfor from "./PayInfor";
import PayProduct from "./PayProduct";
import "../../../Assets/SCSS/paypage.scss";
import Loading from "../../../Components/Loading/Loading";
import { dispatch, useSelector } from "react-redux";

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
    pay_contact: user ? user.phone : "",
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
  }, []);
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
            isAuth={isAuth}
            payInfor={payInfor}
            setPayInfor={setPayInfor}
          />
          <PayProduct products={products} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PayPage;
