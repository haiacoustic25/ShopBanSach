import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const PayInfor = (props) => {
  const { user, isAuth, payInfor, setPayInfor } = props;

  const styleInput = {
    width: "500px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  };

  const onChange = (event) => {
    event.preventDefault();
    setPayInfor({ ...payInfor, [event.target.name]: event.target.value });
  };
  const handlePay = (event) => {
    event.preventDefault();
    if (
      payInfor.pay_name === "" ||
      payInfor.pay_contact === "" ||
      payInfor.pay_email === "" ||
      payInfor.pay_address === ""
    ) {
      NotificationManager.error("Điền đầy đủ thông tin", "", 500);
    }
  };
  return (
    <div className="payInfor">
      <div className="payInfor__header">
        <Link to="/" className="payInfor__header--linkHome">
          Cá Chép BookStore
        </Link>
        <h4>Thông tin thanh toán</h4>
        <span style={{ display: isAuth ? "none" : "" }}>
          Bạn đã có tải khoản? <Link to="/dang-nhap">Đăng nhập</Link>{" "}
        </span>
      </div>

      <form className="payInfor__body" onSubmit={handlePay}>
        <TextField
          disabled={isAuth}
          id="standard-textarea"
          label="Họ và tên"
          placeholder="Họ và tên"
          multiline
          variant="standard"
          name="pay_name"
          value={isAuth ? user?.name : payInfor.pay_name}
          style={styleInput}
          onChange={onChange}
        />
        <br></br>
        <TextField
          disabled={isAuth}
          id="standard-textarea"
          label="Số điện thoại"
          placeholder="Số điện thoại"
          multiline
          variant="standard"
          name="pay_contact"
          value={isAuth ? user?.phone : payInfor.pay_contact}
          onChange={onChange}
          style={styleInput}
        />
        <br></br>
        <TextField
          disabled={isAuth}
          id="standard-textarea"
          label="Email"
          placeholder="Email"
          multiline
          variant="standard"
          name="pay_email"
          value={isAuth ? user?.email : payInfor.pay_email}
          onChange={onChange}
          style={styleInput}
        />
        <br></br>
        <TextField
          id="standard-textarea"
          label="Địa chỉ"
          placeholder="Địa chỉ"
          multiline
          variant="standard"
          name="pay_address"
          value={isAuth ? user?.address : payInfor.pay_address}
          style={styleInput}
        />
        <br></br>
        <Button variant="contained" type="submit">
          Thanh toán
        </Button>
      </form>
      <NotificationContainer />
    </div>
  );
};

export default PayInfor;
