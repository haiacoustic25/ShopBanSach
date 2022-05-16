import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCategory} from '../../../../Redux/Action/action'
import './CategoryForm.scss';
import { useForm } from 'react-hook-form'

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
                    <label>Category Name</label>
                    <input 
                        type="text" 
                        name='tl_name'
                        placeholder="Category Name"
                        {...register("tl_name", {required: true})}
                    />

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
                    <div>
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
