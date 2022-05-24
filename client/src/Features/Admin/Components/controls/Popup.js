import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

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