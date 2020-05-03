import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationDialog(props) {


    return (
        <div>
            <Dialog
                open={props.openConfirmation}
                onClose={props.handleCancel}
            >
                <DialogTitle id="responsive-dialog-title"> {props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you wish to delete this project?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.handleCancel} color="primary">
                        Cancel
                </Button>
                    <Button onClick={props.handleDelete} color="primary" autoFocus>
                        Delete
                 </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
