import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCategory} from '../../../../Redux/Action/action'
import './Form.scss';
import { useForm } from 'react-hook-form';
import "../../../../Assets/SCSS/register.scss";
import {
    OutlinedInput,
    FormControl,
    InputLabel,
} from "@mui/material";

export default function CategoryForm({title, handleClose}) {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const dispatch = useDispatch();
    const handleCreaterNewCategory = (data) =>{
        dispatch(createNewCategory(data))
        handleClose();
    }
    return (
        <>
            <div className='top'>
                <h1> {title} </h1>
            </div>
            <div className="bottom">
                <form onSubmit={handleSubmit(handleCreaterNewCategory)}>
                    <div className="d-flex">
                        <div className="register__form--left ">
                            <FormControl>
                                <InputLabel htmlFor="outlined-adornment-password">
                                Thể loại
                                </InputLabel>
                                <OutlinedInput
                                type="text"
                                name="tl_name"
                                // value={registerData.name}
                                // onChange={onChange}
                                label="Category Name"
                                style={{
                                    width: "350px",
                                    marginBottom: "20px",
                                    backgroundColor: "#fff",
                                }}
                                {...register("tl_name", {required: true})}
                                />
                                </FormControl>
                        </div>
                    </div>
                    {Object.keys(errors).length !== 0 &&(
                        <ul
                            style={{
                                color: 'red',
                                marginLeft: '92px'
                            }}
                        >
                            {errors.name?.type === "required" && <li>Name is required</li>}
                        </ul>
                    )}
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
