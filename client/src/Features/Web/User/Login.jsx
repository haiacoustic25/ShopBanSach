import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
    console.log(loginData.User_Username);
  };
  if (errorLogin === "")
    setTimeout(() => {
      navigate("/");
    }, 1500);

  // show password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Tên đăng nhập
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="User_Username"
                  value={loginData.User_Username}
                  onChange={onChange}
                  label="Tên đăng nhập"
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Mật khẩu
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  name="User_Password"
                  value={loginData.User_Password}
                  onChange={onChange}
                  label="Mật khẩu"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
              </FormControl>
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
