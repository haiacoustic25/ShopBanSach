import React, { useState, useEffect } from "react";
import "./Form.scss";
import "../../../../Assets/SCSS/register.scss";
import default_img from "../../../../Assets/Img/default-user-image-register.png";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  FormHelperText,
  Fab,
} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategorys,
  fetchAllAuthors,
  updateProduct,
} from "../../../../Redux/Action/action";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const productStatus = [
  {
    value: 0,
    label: "Draft",
  },
  {
    value: 1,
    label: "Published",
  },
];

export default function ModalEditProduct({ title, handleClose, Data }) {
  const dispatch = useDispatch();
  const listCategorys = useSelector(
    (state) => state?.category.listCategorys.categories
  );
  useEffect(() => {
    dispatch(fetchAllCategorys());
  }, []);
  const listAuthors = useSelector((state) => state.author.listAuthors.authors);
  useEffect(() => {
    dispatch(fetchAllAuthors());
  }, []);
  const [registerData, setRegisterData] = useState({
    id: Data.id,
    s_name: Data.s_name,
    s_price: Data.s_price,
    s_nsx: Data.s_nsx,
    s_amount: Data.s_amount,
    s_status: Data.s_status,
    s_discount: Data.s_discount,
    author_id: Data.author_id,
    category_id: Data.category_id,
    s_description: Data.s_description,
  });
  const [registerError, setRegisterError] = useState({
    Error: "",
    Error_discount: "",
  });
  const onChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };
  const handleEditProduct = (event) => {
    event.preventDefault();
    if (
      registerData.s_name === "" ||
      registerData.s_price === "" ||
      registerData.s_nsx === "" ||
      registerData.s_amount === "" ||
      registerData.author_id === "" ||
      registerData.category_id === "" ||
      registerData.s_status === "" ||
      registerData.s_discount === "" ||
      registerData.s_description === ""
    ) {
      setRegisterError({
        Error: "Nhập đầy đủ thông tin",
      });
    } else if (
      registerData.Error_discount > 100 &&
      registerData.Error_discount < 0
    ) {
      setRegisterError({
        Error_discount: "Giảm giá trong khoảng 0 - 100",
      });
    } else {
      let formData = new FormData();
      if (fileUpload) {
        formData.append("file_upload", fileUpload);
      }
      Object.keys(registerData).forEach((key) => {
        formData.append(`${key}`, registerData[key]);
      });
      setTimeout(function () {
        NotificationManager.success("Update Success", "", 2000);
      }, 1000);
      dispatch(updateProduct(formData));
      handleClose();
    }
  };
  const imgOld = Data.s_image
    ? `http://localhost:8000/uploads/book/${Data.s_image}`
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
        <form onSubmit={handleEditProduct}>
          <div className="d-flex">
            <div className="register__form--left ">
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Tên sách
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="s_name"
                  value={registerData.s_name}
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
                <TextField
                  id="outlined-select-currency"
                  select
                  name="category_id"
                  label="Thể loại"
                  value={registerData.category_id}
                  onChange={onChange}
                  style={styleInput}
                >
                  {listCategorys?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.tl_name}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Nhà xuất bản
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="s_nsx"
                  value={registerData.s_nsx}
                  onChange={onChange}
                  label="Nhà xuất bản"
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <TextField
                  id="outlined-select-currency"
                  select
                  name="author_id"
                  label="Tác giả"
                  value={registerData.author_id}
                  onChange={onChange}
                  style={styleInput}
                >
                  {listAuthors?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.tg_name}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Giá tiền
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="s_price"
                  value={registerData.s_price}
                  onChange={onChange}
                  label="Giá tiền"
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Số lượng
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="s_amount"
                  value={registerData.s_amount}
                  onChange={onChange}
                  label="Số lượng"
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">
                  Giảm giá %
                </InputLabel>
                <OutlinedInput
                  type="text"
                  name="s_discount"
                  value={registerData.s_discount}
                  onChange={onChange}
                  label="Giảm giá %"
                  placeholder="20%"
                  style={styleInput}
                />
              </FormControl>
              {registerError.Error_discount !== "" && (
                <FormHelperText
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "15px",
                    marginTop: "-20px",
                  }}
                >
                  {registerError.Error_discount}
                </FormHelperText>
              )}
              <br></br>
              <FormControl>
                <TextField
                  id="filled-textarea"
                  label="Mô tả"
                  name="s_description"
                  value={registerData.s_description}
                  onChange={onChange}
                  multiline
                  style={styleInput}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <TextField
                  id="outlined-select-currency"
                  select
                  name="s_status"
                  label="Status"
                  value={registerData.s_status}
                  onChange={onChange}
                  style={styleInput}
                >
                  {productStatus.map((option) => (
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
