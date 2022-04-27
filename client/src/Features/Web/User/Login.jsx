import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [errorLogin, setErrorLogin] = useState();
  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    if (loginData.username === "" || loginData.password === "") {
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
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Tên Đăng Nhập"
                  name="username"
                  value={loginData.username}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Mật Khẩu"
                  name="password"
                  value={loginData.password}
                  onChange={onChange}
                />
              </Form.Group>
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
                variant="primary"
                type="submit"
                className="btn btn-success"
                style={{
                  backgroundColor: "#00ab9f",
                }}
              >
                Đăng Nhập
              </Button>
            </Form>
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
