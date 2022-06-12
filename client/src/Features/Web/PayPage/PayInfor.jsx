import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const PayInfor = (props) => {
  const styleInput = {
    width: "500px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  };
  const { isAuth, payInfor, handlePay, onChange } = props;

  return (
    <div className="payInfor">
      <div className="payInfor__header">
        <Link to="/" className="payInfor__header--linkHome">
          Cá Chép BookStore
        </Link>
        <h4>Thông tin thanh toán</h4>
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
          value={payInfor.pay_name}
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
          name="pay_phone"
          value={payInfor.pay_phone}
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
          value={payInfor.pay_email}
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
          value={payInfor.pay_address}
          onChange={onChange}
          style={styleInput}
        />
        <br></br>
        <Button variant="contained" type="submit">
          Thanh toán
        </Button>
      </form>
    </div>
  );
};

export default PayInfor;
