import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAuthor } from "../../../../Redux/Action/action";
import "./Form.scss";
import "../../../../Assets/SCSS/register.scss";
import default_img from "../../../../Assets/Img/default-user-image-register.png";
import { format } from "date-fns";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  TextField,
  Fab,
} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export default function ModalEditAuthor({ title, handleClose, Data }) {
  const dispatch = useDispatch();
  const [data, SetData] = useState({
    id: Data.id,
    tg_name: Data.tg_name,
    tg_description: Data.tg_description,
    tg_dob: format(new Date(Data.tg_dob), "yyyy-MM-dd"),
  });
  const [registerError, setRegisterError] = useState({
    Error: "",
  });
  const onChange = (event) => {
    SetData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleEditAuthor = (event) => {
    event.preventDefault();
    if (
      data.tg_name === "" ||
      data.tg_dob === "" ||
      data.tg_description === ""
    ) {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else {
      setTimeout(function () {
        NotificationManager.success("Update Success", "", 2000);
      }, 1000);
      let formData = new FormData();
      if (fileUpload) {
        formData.append("file_upload", fileUpload);
      }
      Object.keys(data).forEach((key) => {
        formData.append(`${key}`, data[key]);
      });
      dispatch(updateAuthor(formData));
      handleClose();
    }
  };

  const imgOld = Data.tg_image
    ? `http://localhost:8000/uploads/author/${Data.tg_image}`
    : "";
  const [previewImg, setPreviewImg] = useState(imgOld);
  const [selectedImage, setSelectedImage] = useState();
  const [fileUpload, setFileUpload] = useState(null);
  useEffect(() => {
    if (!selectedImage) {
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
        <form onSubmit={handleEditAuthor}>
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
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  <div>Birthday</div>
                </InputLabel>
                <OutlinedInput
                  type="date"
                  name="tg_dob"
                  value={data.tg_dob}
                  onChange={onChange}
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
              Update
            </button>
          </div>
        </form>
        <NotificationContainer />
      </div>
    </>
  );
}
