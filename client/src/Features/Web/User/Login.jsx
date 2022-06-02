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
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../../../Redux/Action/action";
import { Helmet } from "react-helmet";

const Login = () => {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errorLogin, setErrorLogin] = useState();

  // redux call api
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user);
  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (loginData.username === "" || loginData.password === "") {
      setErrorLogin("Không được để trống tên đăng nhập hoặc mật khẩu");
    } else {
      dispatch(loginRedux(loginData));
    }
  };

  useEffect(() => {
    if (isAuth) {
      let nextPageTime = setTimeout(() => {
        if (user.user.user.isAdmin === 0) navigate("/");
        else navigate("/admin");
      }, 500);

      return () => clearTimeout(nextPageTime);
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    if (user.user?.error === 0) {
      setErrorLogin("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  }, [user]);

  // show password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Ca Chep | Dang nhap</title>
      </Helmet>
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
                  name="username"
                  value={loginData.username}
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
                  name="password"
                  value={loginData.password}
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
