import React, { useState, useEffect } from "react";
import "../../../Assets/SCSS/register.scss";
import default_img from "../../../Assets/Img/default-user-image-register.png";
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
  Fab,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { registerRedux } from "../../../Redux/Action/action";
import { Helmet } from "react-helmet";

const Register = () => {
  const styleInput = {
    width: "350px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  };
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    password: "",
    address: "",
    phone: "",
    email: "",
  });
  const [fileUpload, setFileUpload] = useState(null);
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

  // preview img
  const [selectedImage, setSelectedImage] = useState();
  const [previewImg, setPreviewImg] = useState();

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
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setFileUpload(e.target.files[0]);
    }
  };

  // show password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const user = useSelector((state) => state.user.user);
  const handleRegister = (event) => {
    event.preventDefault();
    if (
      registerData.name === "" ||
      registerData.username === "" ||
      registerData.password === "" ||
      registerData.address === "" ||
      registerData.phone === "" ||
      confirmPassword === ""
    ) {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else if (registerData.password.length < 8) {
      setRegisterError({
        Error_Password: "Mật khẩu ít nhất 8 kí tự",
      });
    } else if (registerData.password !== confirmPassword) {
      setRegisterError({
        Error_ConfirmPassword: "Nhập lại mật khẩu",
      });
    } else {
      let formData = new FormData();
      formData.append("file_upload", fileUpload, fileUpload.name);

      Object.keys(registerData).forEach((key) => {
        formData.append(`${key}`, registerData[key]);
      });
      dispatch(registerRedux(formData));
    }
  };
  useEffect(() => {
    if (user?.user) {
      const nextPageTime = setTimeout(() => {
        navigate("/");
      }, 500);

      return () => clearTimeout(nextPageTime);
    }
  }, [user?.user, navigate]);
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
              fontSize: "14px",
              margin: "10px 0",
            }}
          >
            <Link to="/">TRANG CHỦ</Link>
            <div>/ TẠO TÀI KHOẢN</div>
          </div>
        </div>
        <div className="row ">
          <div className="register__form text-center">
            <h1>Đăng Ký</h1>
            <form onSubmit={handleRegister}>
              <div className="d-flex">
                <div className="register__form--left ">
                  <FormControl>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Họ và tên
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      name="name"
                      value={registerData.name}
                      onChange={onChange}
                      label="Họ và tên"
                      style={{
                        width: "350px",
                        marginBottom: "20px",
                        backgroundColor: "#fff",
                      }}
                    />
                  </FormControl>
                  <br></br>
                  <FormControl>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Tên đăng nhập
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      name="username"
                      value={registerData.username}
                      onChange={onChange}
                      label="Tên đăng nhập"
                      style={styleInput}
                    />
                  </FormControl>
                  <br></br>
                  <FormControl>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Mật khẩu
                    </InputLabel>
                    <OutlinedInput
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={registerData.password}
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
                  <br></br>
                  <FormControl>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Nhập lại mật khẩu
                    </InputLabel>
                    <OutlinedInput
                      type={showConfirmPassword ? "text" : "password"}
                      // name="Password"
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
                  <br></br>
                  <FormControl>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Địa chỉ
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      name="address"
                      value={registerData.address}
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
                      value={registerData.phone}
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
                      value={registerData.email}
                      onChange={onChange}
                      label="Email"
                      style={styleInput}
                    />
                  </FormControl>
                </div>
                <div className="register__form--right">
                  <div className="register__form--right-img">
                    <img src={previewImg ? previewImg : default_img} alt="" />
                  </div>
                  <label
                    htmlFor="upload-photo"
                    className="register__form--right-upload"
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
              </div>
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
                  marginRight: "200px",
                }}
              >
                Đăng ký
              </Button>
            </form>
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div
          className="row text-center"
          style={{
            fontSize: "16px",
            margin: "20px 0",
            marginRight: "200px",
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
