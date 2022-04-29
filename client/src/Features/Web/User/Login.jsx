import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
const Login = () => {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    User_Username: "",
    User_Password: "",
  });
  const [errorLogin, setErrorLogin] = useState();
  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (loginData.User_Username === "" || loginData.User_Password === "") {
      setErrorLogin("Không được để trống tên đăng nhập hoặc mật khẩu");
    } else {
      setErrorLogin("");
    }
    console.log(errorLogin);
  };
  if (errorLogin === "")
    setTimeout(() => {
      navigate("/");
    }, 1500);

  return (
    <>
      <Header />

      <div className="body">
        <div className="row ">
          <div
            className="d-flex"
            style={{
              fontSize: 14,
              margin: "10px 0",
            }}
          >
            <Link to="/">TRANG CHỦ</Link>
            <div>/ TÀI KHOẢN</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 col-sm-push-4 text-center">
            <h1>Đăng Nhập</h1>
            <form onSubmit={handleLogin}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Tên đăng nhập"
                name="User_UserName"
                value={loginData.User_UserName}
                onChange={onChange}
                style={{
                  width: "350px",
                  marginBottom: "20px",
                  marginTop: "10px",
                }}
              />

              <TextField
                type="password"
                id="outlined-basic"
                label="Mật khẩu"
                name="User_Password"
                value={loginData.User_Password}
                onChange={onChange}
                style={{
                  width: "350px",
                  marginBottom: "20px",
                }}
              />
              {errorLogin !== "" && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {errorLogin}
                </div>
              )}
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#00ab9f",
                  color: "#fff",
                  padding: "10px",
                }}
              >
                Đăng nhập
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
          <Link to="/dang-ky">Đăng Ký</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
