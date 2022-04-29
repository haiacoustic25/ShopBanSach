import React, { useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const Register = () => {
  const [dataRegister, setDataRegister] = useState({
    User_Name: "",
    User_Username: "",
    User_Password: "",
    User_Address: "",
    User_Contact: "",
    img: "",
  });

  const onChange = (event) => {
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(dataRegister);
  };

  // preview img
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //     setDataRegister({
  //       ...dataRegister,
  //       img: e.target.files[0].name,
  //     });
  //   }
  // };

  return (
    <>
      <Header />
      <div className="body">
        <div className="row ">
          <div
            className="d-flex"
            style={{
              fontSize: "14px",
              margin: "10px 0",
            }}
          >
            <Link to="/">TRANG CHỦ</Link>
            <div>/ TẠO TÀI KHOẢN</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 col-sm-push-4 text-center">
            <h1>Đăng Ký</h1>
            <form onSubmit={handleRegister}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Tên người dùng"
                name="User_Name"
                value={dataRegister.User_Name}
                onChange={onChange}
                style={{
                  width: "350px",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              />

              <TextField
                type="text"
                id="outlined-basic"
                label="Tên đăng nhập"
                name="User_Username"
                value={dataRegister.User_Username}
                onChange={onChange}
                style={{
                  width: "350px",
                  marginBottom: "20px",
                }}
              />
              <TextField
                type="password"
                id="outlined-basic"
                label="Mật khẩu"
                name="User_Password"
                value={dataRegister.User_Password}
                onChange={onChange}
                style={{
                  width: "350px",
                  marginBottom: "20px",
                }}
              />
              <TextField
                type="password"
                id="outlined-basic"
                label="Nhập lại mật khẩu"
                style={{
                  width: "350px",
                  marginBottom: "20px",
                }}
              />
              <TextField
                type="text"
                id="outlined-basic"
                label="Địa chỉ"
                name="User_Address"
                value={dataRegister.User_Address}
                style={{
                  width: "350px",
                  marginBottom: "20px",
                }}
              />
              <TextField
                type="text"
                id="outlined-basic"
                label="Số điện thoại"
                name="User_Contact"
                value={dataRegister.User_Contact}
                style={{
                  width: "350px",
                  marginBottom: "20px",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#00ab9f",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                Đăng ký
              </Button>
            </form>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div
          className="row text-center"
          style={{
            fontSize: "16px",
            margin: "20px 0",
          }}
        >
          <Link to="/">Trở về</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
