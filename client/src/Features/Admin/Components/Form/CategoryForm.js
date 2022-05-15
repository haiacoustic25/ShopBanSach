import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCategory } from '../../../../Redux/Action/action'
import './CategoryForm.scss';

export default function CategoryForm({title, handleClose, submit}) {

    const [tl_name, setTl_Name] = useState("");
    const dispatch = useDispatch();

    const handleCreaterNewCategory = () =>{
        dispatch(createNewCategory(tl_name))
        handleClose();
    }
    return (
        <>
            <div className='top'>
                <h1> {title} </h1>
            </div>
            <div className="bottom">
                <form>
                    <label>Category Name</label>
                    <input 
                        type="text" 
                        placeholder="Category Name" 
                        value={tl_name} 
                        onChange={(event) => setTl_Name(event.target.value)}
                    />
                    <div>
                        <button type='button' style={{marginRight: '10px', borderRadius:'5px'}} onClick={handleClose}>Cancel</button>
                        <button 
                            onClick={() => handleCreaterNewCategory()} 
                            style={{borderRadius:'5px'}} 
                        >
                            {submit}
                        </button>
                    </div>
                </form>
            </div> 
        </>
    )
}
