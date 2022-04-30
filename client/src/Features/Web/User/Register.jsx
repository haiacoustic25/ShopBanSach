import React, { useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
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

const Register = () => {
  const [dataRegister, setDataRegister] = useState({
    User_Name: "",
    User_Username: "",
    User_Password: "",
    User_Address: "",
    User_Contact: "",
    img: "",
  });
  const [confirmPassword, setConfirmPassword] = useState();
  const onChange = (event) => {
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };
  const handleRegister = (event) => {
    event.preventDefault();
    if (dataRegister.User_Password === confirmPassword) {
      console.log(dataRegister);
    }else console.log("Ádasd")
  };

  // preview img
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //     setDataRegister({
  //       ...dataRegister,
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
                  name="User_Name"
                  value={dataRegister.User_Name}
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
                  name="User_Username"
                  value={dataRegister.User_Username}
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
                  value={dataRegister.User_Password}
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
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Địa chỉ
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="User_Address"
                  value={dataRegister.User_Address}
                  onChange={onChange}
                  label="Địa chỉ"
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Số điện thoại
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="User_Contact"
                  value={dataRegister.User_Contact}
                  onChange={onChange}
                  label="Số điện thoại"
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
              </FormControl>

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
