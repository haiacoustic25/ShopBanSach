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
} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";

export default function AuthorForm({title, handleClose}) {
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
                                name="tg_name"
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
                                        Birthday
                                    </div>
                                </InputLabel>
                                <OutlinedInput
                                type="date"
                                name="tg_dob"
                                // value={registerData.username}
                                // onChange={onChange}
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
                                    multiline
                                    // variant="filled"
                                    style={styleInput}
                                />
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
