import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import "../../../Assets/SCSS/accountPage.scss";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  FormHelperText,
  Fab,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AddIcon from "@material-ui/icons/Add";
const Account = () => {
  const styleInput = {
    width: "250px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  };
  const user = useSelector((state) => state.user.user);
  const [updateUserData, setUpdateUserData] = useState({
    name: user?.user?.name,
    password: user?.user?.password,
    address: user?.user?.address,
    phone: user?.user?.phone,
    email: user?.user?.email,
  });
  const [selectedImage, setSelectedImage] = useState();
  const [previewImg, setPreviewImg] = useState();

  const onChange = (event) => {
    setUpdateUserData({
      ...updateUserData,
      [event.target.name]: event.target.value,
    });
  };
  const handleUpdate = () => {
    setShow(false);
    console.log(updateUserData);
  };

  // preview img
  const [fileUpload, setFileUpload] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      setPreviewImg(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewImg(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setFileUpload(e.target.files[0]);
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
            <img src={user?.user?.avatar} alt="" />
          </div>
          <div className="account__infor d-flex">
            <div className="account__infor--row">
              <span>{user?.user?.name}</span>
              <span>{user?.user?.username}</span>
            </div>
            <div className="account__infor--row">
              <span>Địa chỉ</span>
              <span>{user?.user?.address}</span>
            </div>
            <div className="account__infor--row">
              <span>Số điện thoại</span>
              <span>{user?.user?.phone}</span>
            </div>
            <div className="account__infor--row">
              <span onClick={handleShow}>Sửa</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        show={show}
        onHide={handleClose}
        style={{ width: "auto !important" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin cá nhân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="d-flex">
              <div className="account__form--left">
                <div className="account__form--left-img">
                  <img src={previewImg} alt="" />
                </div>
                <label
                  htmlFor="upload-photo"
                  className="account__form--left-upload"
                >
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={imageChange}
                  />

                  <Fab
                    color="primary"
                    size="small"
                    component="span"
                    aria-label="add"
                  >
                    <AddIcon />
                  </Fab>
                </label>
              </div>
              <div className="account__form--right">
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Họ và tên
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    name="name"
                    value={updateUserData.name}
                    onChange={onChange}
                    label="Họ và tên"
                    style={styleInput}
                  />
                </FormControl>
                <br></br>
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Địa chỉ
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    name="address"
                    value={updateUserData.address}
                    onChange={onChange}
                    label="Địa chỉ"
                    style={styleInput}
                  />
                </FormControl>
                <br></br>
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Số điện thoại
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    name="phone"
                    value={updateUserData.phone}
                    onChange={onChange}
                    label="Số điện thoại"
                    style={styleInput}
                  />
                </FormControl>
                <br></br>
                <FormControl>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    name="email"
                    value={updateUserData.email}
                    onChange={onChange}
                    label="Email"
                    style={styleInput}
                  />
                </FormControl>
              </div>
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Hủy
              </Button>
              <Button
                typr="submit"
                variant="primary"
                onClick={handleUpdate}
                style={{
                  backgroundColor: "#00ab9f",
                }}
              >
                Lưu
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Account;
