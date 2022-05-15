import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import UserForm from './UserForm';
import CategoryForm from './CategoryForm'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Add({inputs, title,  handleClose, open}) {

  return (
    <div>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            maxWidth='md'
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {title === "Add New User" ? (
                        <UserForm inputs={inputs} title={title} handleClose={handleClose}/>
                    ) : null}
                    {title === "Add New Product" ? (
                        <UserForm inputs={inputs} title={title} handleClose={handleClose}/>
                    ) : null}
                    {title === "Add New Order" ? (
                        <UserForm inputs={inputs} title={title} handleClose={handleClose}/>
                    ) : null}
                    {title === "Add New Author" ? (
                        <UserForm inputs={inputs} title={title} handleClose={handleClose}/>
                    ) : null}
                    {title === "Add New Category" ? (
                        <CategoryForm inputs={inputs} title={title} handleClose={handleClose}/>
                    ) : null}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Add