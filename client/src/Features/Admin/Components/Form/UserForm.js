import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewUsersRedux,
  fetchAllUsers,
} from "../../../../Redux/Action/action";
import "./Form.scss";
import "../../../../Assets/SCSS/register.scss";
import default_img from "../../../../Assets/Img/default-user-image-register.png";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  TextField,
  Fab,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const userRole = [
  {
    value: 1,
    label: "Admin",
  },
  {
    value: 0,
    label: "User",
  },
];

export default function UserForm({ title, handleClose }) {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers.users);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  let email = listUsers.map((item) => {
    return item.email;
  });
  let user = listUsers.map((item) => {
    return item.username;
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    isAdmin: "",
  });
  const [registerError, setRegisterError] = useState({
    Error_Password: "",
    Error: "",
    Error_Phone: "",
    Error_email: "",
    Error_username: "",
  });
  const onChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };
  const handleCreateNewUser = (event) => {
    event.preventDefault();
    if (
      registerData.name === "" ||
      registerData.email === "" ||
      registerData.username === "" ||
      registerData.password === "" ||
      // registerData.address === "" ||
      registerData.phone === "" ||
      registerData.isAdmin === ""
    ) {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else if (registerData.password.length < 8) {
      setRegisterError({
        Error_Password: "Mật khẩu ít nhất 8 kí tự",
      });
    } else if (registerData.phone.length > 10) {
      setRegisterError({
        Error_Phone: "Điện thoại nhiều nhất 10 kí tự",
      });
    } else if (email.includes(registerData.email)) {
      setRegisterError({
        Error_email: "Email đã tồn tại",
      });
    } else if (user.includes(registerData.username)) {
      setRegisterError({
        Error_username: "Username đã tồn tại",
      });
    } else {
      let formData = new FormData();
      formData.append("file_upload", fileUpload, fileUpload.name);

      Object.keys(registerData).forEach((key) => {
        formData.append(`${key}`, registerData[key]);
      });
      NotificationManager.success("Add Success", "", 2000);
      dispatch(createNewUsersRedux(formData));
      handleClose();
    }
  };
  const [previewImg, setPreviewImg] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [fileUpload, setFileUpload] = useState(null);
  useEffect(() => {
    if (!selectedImage) {
      setPreviewImg(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewImg(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setFileUpload(e.target.files[0]);
    }
  };

  const styleInput = {
    width: "350px",
    marginBottom: "20px",
    backgroundColor: "#fff",
  };
  return (
    <>
      <div className="top">
        <h1> {title} </h1>
      </div>
      <div className="bottom">
        <form onSubmit={handleCreateNewUser}>
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
                  <div>Email</div>
                </InputLabel>
                <OutlinedInput
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={onChange}
                  label="Email"
                  style={styleInput}
                />
                {registerError.Error_email !== "" && (
                  <FormHelperText
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "15px",
                      marginTop: "-20px",
                    }}
                  >
                    {registerError.Error_email}
                  </FormHelperText>
                )}
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  <div>Tên đăng nhập</div>
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="username"
                  value={registerData.username}
                  onChange={onChange}
                  label="Username"
                  style={styleInput}
                />
                {registerError.Error_username !== "" && (
                  <FormHelperText
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "15px",
                      marginTop: "-20px",
                    }}
                  >
                    {registerError.Error_username}
                  </FormHelperText>
                )}
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  <div>Mật khẩu</div>
                </InputLabel>
                <OutlinedInput
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={onChange}
                  label="Password"
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
                  <div>Số điện thoại</div>
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="phone"
                  value={registerData.phone}
                  onChange={onChange}
                  label="Số điện thoại"
                  style={styleInput}
                />
                {registerError.Error_Phone !== "" && (
                  <FormHelperText
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "15px",
                      marginTop: "-20px",
                    }}
                  >
                    {registerError.Error_Phone}
                  </FormHelperText>
                )}
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  <div>Địa chỉ</div>
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
                <TextField
                  id="outlined-select-currency"
                  select
                  name="isAdmin"
                  label="Chức năng"
                  value={registerData.isAdmin}
                  onChange={onChange}
                  style={styleInput}
                >
                  {userRole.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </div>
            <div
              className="register__form--right"
              style={{ marginLeft: "24px" }}
            >
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
                  name="avatar"
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
          <div className="button">
            <button
              type="button"
              style={{ marginRight: "10px", borderRadius: "5px" }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button type="submit" style={{ borderRadius: "5px" }}>
              Add
            </button>
          </div>
        </form>
        <NotificationContainer />
      </div>
    </>
  );
}
