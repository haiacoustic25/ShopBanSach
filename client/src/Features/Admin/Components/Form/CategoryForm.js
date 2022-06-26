import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewCategory,
  fetchAllCategorys,
} from "../../../../Redux/Action/action";
import "./Form.scss";
import "../../../../Assets/SCSS/register.scss";
import { OutlinedInput, FormControl, InputLabel } from "@mui/material";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function CategoryForm({ title, handleClose }) {
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
  const [tl_name, setTl_name] = useState({ tl_name: "" });
  const [registerError, setRegisterError] = useState({
    Error: "",
    Error_name: "",
  });
  const onChange = (event) => {
    setTl_name({
      ...tl_name,
      tl_name: event.target.value,
    });
  };
  const handleCreateNewCategory = (event) => {
    event.preventDefault();
    if (tl_name.tl_name === "") {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else if (name.includes(tl_name.tl_name)) {
      setRegisterError({
        Error_name: "Tên thể loại đã tồn tại",
      });
    } else {
      NotificationManager.success("Add Success", "", 2000);
      dispatch(createNewCategory(tl_name));
      handleClose();
    }
  };
  return (
    <>
      <div className="top">
        <h1> {title} </h1>
      </div>
      <div className="bottom">
        <form onSubmit={handleCreateNewCategory}>
          <div className="d-flex">
            <div className="register__form--left ">
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Thể loại
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="tl_name"
                  value={tl_name.tl_name}
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
              Add
            </button>
          </div>
        </form>
        <NotificationContainer />
      </div>
    </>
  );
}
