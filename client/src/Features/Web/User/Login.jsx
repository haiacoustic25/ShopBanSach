import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
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
            <Form>
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
              <Button
                variant="primary"
                type="submit"
                className="btn btn-success"
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
