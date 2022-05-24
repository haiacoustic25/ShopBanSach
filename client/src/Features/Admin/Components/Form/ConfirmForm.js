import React from 'react';
import './Form.scss';
import "../../../../Assets/SCSS/register.scss";

import {
    NotificationContainer,
  } from "react-notifications";

export default function ConfirmForm({title, handleClose, handleDelete}) {
    return (
        <>
            <div className='top'>
                <h1 style={{color: 'red'}}> {title} </h1>
            </div>
            <div className="bottom">
                <div>
                    <h1> Bạn xác nhận muốn xóa? </h1>
                </div>
                <div className='button'>
                    <button type='button' style={{marginRight: '10px', borderRadius:'5px'}} onClick={handleClose}>Cancel</button>
                    <button 
                        onClick={handleDelete}
                        style={{borderRadius:'5px'}}
                    >
                        Delete
                    </button>
                </div>
                <NotificationContainer />
            </div> 
        </>
    )
}
