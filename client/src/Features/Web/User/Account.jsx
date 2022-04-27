import React, { useState } from "react";
import Header from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import "../../../Assets/SCSS/accountPage.scss";
import { Modal, Button, Form } from "react-bootstrap";
const Account = () => {
  const [dataUpdate, setDataUpdate] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    img: "",
  });

  const onChange = (event) => {
    setDataUpdate({
      ...dataUpdate,
      [event.target.name]: event.target.value,
    });
  };
  const handleUpdate = () => {
    setShow(false);
    console.log(dataUpdate);
  };

  // preview img
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setDataUpdate({
        ...dataUpdate,
        img: e.target.files[0].name,
      });
    }
  };

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <div className="body">
        <div className="row ">
          <div
            className="d-flex my-2"
            style={{
              fontSize: 14,
            }}
          >
            <Link to="/">TRANG CHỦ</Link>
            <div className="text-uppercase px-2">/ TÀI KHOẢN</div>
          </div>
        </div>
        <div className="account d-flex">
          <div className="account__img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
              alt=""
            />
          </div>
          <div className="account__infor d-flex">
            <div className="account__infor--row">
              <span>Hồ Minh Hải</span>
              <span>admin</span>
            </div>
            <div className="account__infor--row">
              <span>Địa chỉ</span>
              <span>Tân Kỳ - Nghệ An</span>
            </div>
            <div className="account__infor--row">
              <span>Số điện thoại</span>
              <span>0123456789</span>
            </div>
            <div className="account__infor--row">
              <span onClick={handleShow}>Sửa</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin cá nhân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Tên Người Dùng"
                name="name"
                value={dataUpdate.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Địa chỉ"
                name="address"
                value={dataUpdate.address}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Số điện thoại"
                name="phoneNumber"
                value={dataUpdate.phoneNumber}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button
            variant="primary"
            onClick={handleUpdate}
            style={{
              backgroundColor: "#00ab9f",
            }}
          >
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Account;
