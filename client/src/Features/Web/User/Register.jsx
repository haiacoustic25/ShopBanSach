import React, { useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [dataRegister, setDataRegister] = useState({
    name: "",
    username: "",
    password: "",
    address: "",
    phoneNumber: "",
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
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setDataRegister({
        ...dataRegister,
        img: e.target.files[0].name,
      });
    }
  };

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
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tên Người Dùng"
                  name="name"
                  value={dataRegister.name}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tên Đăng Nhập"
                  name="username"
                  value={dataRegister.username}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Mật Khẩu"
                  name="password"
                  value={dataRegister.password}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Nhập Lại Mật Khẩu" />
              </Form.Group>
              <Form.Group className="mb-3" c>
                <Form.Control
                  type="text"
                  placeholder="Địa chỉ"
                  name="address"
                  value={dataRegister.address}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Số điện thoại"
                  name="phoneNumber"
                  value={dataRegister.phoneNumber}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="file" onChange={imageChange} />
                {selectedImage && (
                  <div>
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Thumb"
                      className="w-50 h-50 mt-3"
                    />
                  </div>
                )}
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-success"
                style={{
                  backgroundColor: "#00ab9f",
                }}
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
