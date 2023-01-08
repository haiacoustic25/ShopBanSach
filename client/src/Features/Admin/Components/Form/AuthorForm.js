import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewAuthor,
  fetchAllAuthors,
} from "../../../../Redux/Action/action";
import "./Form.scss";
import "../../../../Assets/SCSS/register.scss";
import default_img from "../../../../Assets/Img/default-user-image-register.png";

import {
  OutlinedInput,
  FormControl,
  InputLabel,
  TextField,
  FormHelperText,
  Fab,
} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function AuthorForm({ title, handleClose }) {
  const [date, setDate] = useState(false);
  const dispatch = useDispatch();
  const listAuthors = useSelector((state) => state.author.listAuthors.authors);
  useEffect(() => {
    dispatch(fetchAllAuthors());
  }, []);
  let name = listAuthors.map((item) => {
    return item.tg_name;
  });
  const [data, SetData] = useState({
    tg_name: "",
    tg_description: "",
    tg_dob: "",
  });
  const [registerError, setRegisterError] = useState({
    Error: "",
    Error_name: "",
  });
  const onChange = (event) => {
    SetData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const onClick = () => {
    setDate(true);
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

  const handleCreateNewAuthor = (event) => {
    event.preventDefault();
    if (
      data.tg_name === "" ||
      data.tg_dob === "" ||
      data.tg_description === ""
    ) {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else if (name.includes(data.tg_name)) {
      setRegisterError({
        Error_name: "Tên tác giả đã tồn tại",
      });
    } else {
      let formData = new FormData();
      if (fileUpload != null) {
        formData.append("file_upload", fileUpload, fileUpload.name);
      }

      Object.keys(data).forEach((key) => {
        formData.append(`${key}`, data[key]);
      });
      NotificationManager.success("Add Success", "", 2000);
      dispatch(createNewAuthor(formData));
      handleClose();
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
        <form onSubmit={handleCreateNewAuthor}>
          <div className="d-flex">
            <div className="register__form--left ">
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Họ và tên
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="tg_name"
                  value={data.tg_name}
                  onChange={onChange}
                  label="Họ và tên"
                  style={{
                    width: "350px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                  }}
                />
                {registerError.Error_name !== "" && (
                  <FormHelperText
                    style={{
                      color: "red",
                      fontSize: "14px",
                      marginBottom: "15px",
                      marginTop: "-20px",
                    }}
                  >
                    {registerError.Error_name}
                  </FormHelperText>
                )}
              </FormControl>
              <br></br>
              <FormControl>
                {date && (
                  <InputLabel htmlFor="outlined-adornment-password">
                    <div>Birthday</div>
                  </InputLabel>
                )}
                <OutlinedInput
                  type="date"
                  name="tg_dob"
                  value={data.tg_dob}
                  onChange={onChange}
                  onFocus={onClick}
                  label="Birthday"
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <TextField
                  id="filled-textarea"
                  label="Description"
                  name="tg_description"
                  value={data.tg_description}
                  onChange={onChange}
                  multiline
                  style={styleInput}
                />
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
                  name="tg_image"
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
