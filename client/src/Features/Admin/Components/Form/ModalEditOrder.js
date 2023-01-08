import React, { useState } from "react";
import "./Form.scss";
import "../../../../Assets/SCSS/register.scss";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateOrder } from "../../../../Redux/Action/action";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const orderStatus = [
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Complete",
    label: "Complete",
  },
  {
    value: "Cancelled",
    label: "Cancelled",
  },
  {
    value: "Processed",
    label: "Processed",
  },
];
export default function ModalEditOrder({ title, handleClose, Data }) {
  const dispatch = useDispatch();
  const oldData = {
    name: Data.user.name,
    s_name: Data.books.map((item) => {
      return ` ${item.s_name}`
    }),
    book_quantity: Data.cart.map((item) => {
      return ` ${item.book_quantity}` 
    }),
    bill_total: Data.bill.bill_total,
  }
  const [registerData, setRegisterData] = useState({
    id: Data.bill.id,
    bill_phone: Data.bill.bill_phone,
    status: Data.bill.status,
    bill_address: Data.bill.bill_address,
  });
  const [registerError, setRegisterError] = useState({
    Error: "",
  });
  const onChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };
  const handleEditOrder = (event) => {
    event.preventDefault();
    if (
      registerData.bill_phone === "" ||
      registerData.status === "" ||
      registerData.bill_address === ""
    ) {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else {
      let formData = new FormData();
      Object.keys(registerData).forEach((key) => {
        formData.append(`${key}`, registerData[key]);
      });
      NotificationManager.success("Update Success", "", 2000);
      dispatch(updateOrder(formData));
      handleClose();
    }
  };
  const styleInput = {
    width: "350px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  };
  return (
    <>
      <div className="top">
        <h1> {title} </h1>
      </div>
      <div className="bottom">
        <form onSubmit={handleEditOrder}>
          <div className="d-flex">
            <div className="register__form--left ">
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Tên khách hàng
                </InputLabel>
                <OutlinedInput
                  type="text"
                  disabled
                  name="name"
                  value={oldData.name}
                  onChange={onChange}
                  label="Tên khách hàng"
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Số điện thoại
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="bill_phone"
                  value={registerData.bill_phone}
                  onChange={onChange}
                  label="Số điện thoại"
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Tên sách
                </InputLabel>
                <OutlinedInput
                  type="text"
                  disabled
                  name="s_name"
                  value={oldData.s_name}
                  onChange={onChange}
                  label="Tên sách"
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Số lượng
                </InputLabel>
                <OutlinedInput
                  type="text"
                  disabled
                  name="book_quantity"
                  value={oldData.book_quantity}
                  onChange={onChange}
                  label="Số lượng"
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Giá tiền
                </InputLabel>
                <OutlinedInput
                  type="text"
                  disabled
                  name="bill_total"
                  value={oldData.bill_total}
                  onChange={onChange}
                  label="Giá tiền"
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Địa chỉ
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="bill_address"
                  value={registerData.bill_address}
                  onChange={onChange}
                  label="Địa chỉ"
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <TextField
                  id="outlined-select-currency"
                  select
                  name="status"
                  label="Status"
                  value={registerData.status}
                  onChange={onChange}
                  style={styleInput}
                >
                  {orderStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </div>
          </div>
          {registerError.Error !== "" && (
            <div
              style={{
                color: "red",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              {registerError.Error}
            </div>
          )}
          <div className="button">
            <button
              type="button"
              style={{ marginRight: "10px", borderRadius: "5px" }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button type="submit" style={{ borderRadius: "5px" }}>
              Update
            </button>
          </div>
        </form>
        <NotificationContainer />
      </div>
    </>
  );
}
