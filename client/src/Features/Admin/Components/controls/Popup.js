import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popup(props) {

    const { children, open } = props;

    return (
        <Dialog open={open} maxWidth="md">
            <DialogContent dividers>
                <DialogContentText>
                    {children}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}