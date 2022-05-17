import React, { useState, useEffect } from 'react';
import { createNewAuthor } from '../../../../Redux/Action/action'
import './Form.scss';
import { useForm } from 'react-hook-form'
import "../../../../Assets/SCSS/register.scss";
import default_img from "../../../../Assets/Img/default-user-image-register.png";
import {
    OutlinedInput,
    FormControl,
    InputLabel,
    TextField,
    MenuItem,
    Fab,
} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategorys, fetchAllAuthors, fetchAllProducts } from "../../../../Redux/Action/action"



const productStatus = [
    {
        value: 0,
        label: 'Draft'
    },
    {
        value: 1,
        label: 'Published'
    }
]

export default function ProductForm({title, handleClose}) {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const dispatch = useDispatch();
    const listCategorys = useSelector((state) => state?.category.listCategorys.categories);
    useEffect(() => {
        dispatch(fetchAllCategorys())
    }, [])
    console.log(listCategorys)
    const listAuthors = useSelector((state) => state.author.listAuthors.authors);
    useEffect(() => {
        dispatch(fetchAllAuthors())
    }, [])
    const handleCreateNewAuthor = (data) =>{
        dispatch(createNewAuthor(data))
        handleClose();
    }
    const [tg_image, setTg_image] = useState('')
    const [previewImg, setPreviewImg] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const [fileUpload, setFileUpload] = useState(null);
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
          setFileUpload(e.target.files[0]);
        }
    };

    const [defaultStatus, setDefaultStatus] = useState('Published');
    const handleChangeStatus = (event) => {
        setDefaultStatus(event.target.value);
      };
    const styleInput = {
        width: "350px",
        marginBottom: "20px",
        backgroundColor: "#fff",
    };
    return (
        <>
            <div className='top'>
                <h1> {title} </h1>
            </div>
            <div className="bottom">
                <form>
                    <div className="d-flex">
                        <div className="register__form--left ">
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-password">
                                Tên sách
                                </InputLabel>
                                <OutlinedInput
                                type="text"
                                name="s_name"
                                // value={registerData.name}
                                // onChange={onChange}
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
                                    name='category_id'
                                    label="Thể loại"
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
                                label="Nhà xuất bản"
                                style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    name='author_id'
                                    label="Tác giả"
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
                                // value={registerData.username}
                                // onChange={onChange}
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
                                // value={registerData.username}
                                // onChange={onChange}
                                label="Số lượng"
                                style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Giảm giá
                                </InputLabel>
                                <OutlinedInput
                                type="text"
                                name="s_discount"
                                // value={registerData.username}
                                // onChange={onChange}
                                label="Giảm giá"
                                placeholder='20%'
                                style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <TextField
                                    id="filled-textarea"
                                    label="Mô tả"
                                    name="s_description"
                                    multiline
                                    style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    name='s_status'
                                    label="Status"
                                    onChange={handleChangeStatus}
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
                        <div className="register__form--right" style={{marginLeft: '24px'}}>
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
                    <div className='button'>
                        <button type='button' style={{marginRight: '10px', borderRadius:'5px'}} onClick={handleClose}>Cancel</button>
                        <button 
                            type='submit'
                            style={{borderRadius:'5px'}}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div> 
        </>
    )
}
