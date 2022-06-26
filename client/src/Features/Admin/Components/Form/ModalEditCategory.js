import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCategory,
  fetchAllCategorys,
} from "../../../../Redux/Action/action";
import "./Form.scss";
import "../../../../Assets/SCSS/register.scss";
import { OutlinedInput, FormControl, InputLabel } from "@mui/material";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function ModalEditCategory({ title, handleClose, Data }) {
  const dispatch = useDispatch();
  const listCategorys = useSelector(
    (state) => state.category.listCategorys.categories
  );
  useEffect(() => {
    dispatch(fetchAllCategorys());
  }, []);
  let name = listCategorys.map((item) => {
    return item.tl_name;
  });
  const [data, SetData] = useState({
    tl_name: Data.tl_name,
  });
  const [registerError, setRegisterError] = useState({
    Error: "",
    Error_name: "",
  });
  const onChange = (event) => {
    SetData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleUpdateCategory = (event) => {
    event.preventDefault();
    if (data.tl_name === "") {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else if (name.includes(data.tl_name)) {
      setRegisterError({
        Error_name: "Tên thể loại đã tồn tại",
      });
    } else {
      setTimeout(function () {
        NotificationManager.success("Update Success", "", 2000);
      }, 1000);
      dispatch(updateCategory(Data.id, data));
      handleClose();
    }
  };
  return (
    <>
      <div className="top">
        <h1> {title} </h1>
      </div>
      <div className="bottom">
        <form onSubmit={handleUpdateCategory}>
          <div className="d-flex">
            <div className="register__form--left ">
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Thể loại
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="tl_name"
                  value={data.tl_name}
                  onChange={onChange}
                  label="Category Name"
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
                {registerError.Error_name !== "" && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    {registerError.Error_name}
                  </div>
                )}
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
