import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
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
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Tên Người Dùng" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Tên Đăng Nhập" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Mật Khẩu" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Nhập Lại Mật Khẩu" />
              </Form.Group>
              <Form.Group className="mb-3" c>
                <Form.Control type="text" placeholder="Địa chỉ" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Số điện thoại" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-success"
              >
                Đăng Ký
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
