import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    Fab,
    MenuItem
} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";

const userRole = [
    {
        value: 1,
        label: 'Admin'
    },
    {
        value: 0,
        label: 'User'
    }
]

export default function UserForm({title, handleClose}) {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const dispatch = useDispatch();
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
                                Họ và tên
                                </InputLabel>
                                <OutlinedInput
                                type="text"
                                name="name"
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
                                <InputLabel htmlFor="outlined-adornment-password">
                                    <div >
                                        Email
                                    </div>
                                </InputLabel>
                                <OutlinedInput
                                type="email"
                                name="email"
                                // value={registerData.username}
                                // onChange={onChange}
                                label="Email"
                                style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-password">
                                    <div >
                                        Username
                                    </div>
                                </InputLabel>
                                <OutlinedInput
                                type="text"
                                name="username"
                                // value={registerData.username}
                                // onChange={onChange}
                                label="Username"
                                style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-password">
                                    <div >
                                        Password
                                    </div>
                                </InputLabel>
                                <OutlinedInput
                                type="password"
                                name="password"
                                // value={registerData.username}
                                // onChange={onChange}
                                label="Password"
                                style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-password">
                                    <div >
                                        Số điện thoại
                                    </div>
                                </InputLabel>
                                <OutlinedInput
                                type="text"
                                name="phone"
                                // value={registerData.username}
                                // onChange={onChange}
                                label="Số điện thoại"
                                style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-password">
                                    <div >
                                        Địa chỉ
                                    </div>
                                </InputLabel>
                                <OutlinedInput
                                type="text"
                                name="address"
                                // value={registerData.username}
                                // onChange={onChange}
                                label="Địa chỉ"
                                style={styleInput}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    name='isAdmin'
                                    label="Chức năng"
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
