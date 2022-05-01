import React, { useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const styleInput = {
    width: "350px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  };
  let navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    user_name: "",
    user_username: "",
    user_password: "",
    user_address: "",
    user_contact: "",
    user_email: "",
  });
  const [registerError, setRegisterError] = useState({
    Error_Password: "",
    Error_ConfirmPassword: "",
    Error: "",
  });
  const [confirmPassword, setConfirmPassword] = useState();
  const onChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };
  const handleRegister = (event) => {
    event.preventDefault();
    if (
      registerData.user_name === "" ||
      registerData.user_username === "" ||
      registerData.user_password === "" ||
      registerData.user_address === "" ||
      registerData.user_contact === "" ||
      confirmPassword === ""
    ) {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else if (registerData.user_password.length < 8) {
      setRegisterError({
        Error_Password: "Mật khẩu ít nhất 8 kí tự",
      });
    } else if (registerData.user_password !== confirmPassword) {
      setRegisterError({
        Error_ConfirmPassword: "Nhập lại mật khẩu",
      });
    } else {
      console.log(registerData);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };
  // preview img
  // const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //     setRegisterData({
  //       ...registerData,
  //       img: e.target.files[0].name,
  //     });
  //   }
  // };

  // show password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
            <form onSubmit={handleRegister}>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Họ và tên
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="user_name"
                  value={registerData.user_name}
                  onChange={onChange}
                  label="Họ và tên"
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Tên đăng nhập
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="user_username"
                  value={registerData.user_username}
                  onChange={onChange}
                  label="Tên đăng nhập"
                  style={styleInput}
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Mật khẩu
                </InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  name="user_password"
                  value={registerData.user_password}
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
                  style={styleInput}
                />
                {registerError.Error_Password !== "" && (
                  <FormHelperText
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "15px",
                      marginTop: "-20px",
                    }}
                  >
                    {registerError.Error_Password}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Nhập lại mật khẩu
                </InputLabel>
                <OutlinedInput
                  type={showConfirmPassword ? "text" : "password"}
                  // name="User_Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  label="Nhập lại mật khẩu"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  style={styleInput}
                />
                {registerError.Error_ConfirmPassword !== "" && (
                  <FormHelperText
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "15px",
                      marginTop: "-20px",
                    }}
                  >
                    {registerError.Error_ConfirmPassword}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Địa chỉ
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="user_address"
                  value={registerData.user_address}
                  onChange={onChange}
                  label="Địa chỉ"
                  style={styleInput}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Số điện thoại
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="user_contact"
                  value={registerData.user_contact}
                  onChange={onChange}
                  label="Số điện thoại"
                  style={styleInput}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="user_email"
                  value={registerData.user_email}
                  onChange={onChange}
                  label="Email"
                  style={styleInput}
                />
              </FormControl>
              {registerError.Error !== "" && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {registerError.Error}
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
