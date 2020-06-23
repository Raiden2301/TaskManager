import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import MuiAlert from '@material-ui/lab/Alert';

import { closeSnack } from '../actions/SnackActions'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SimpleSnackbar = (props) => {


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.closeSnack()
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={props.open}
            autoHideDuration={6000}
            onClose={handleClose}
            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        >
            <Alert onClose={handleClose} severity={props.severity}>
                {props.message}
            </Alert>
        </Snackbar>
    );
}


const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
    closeSnack
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
