import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogTitle, DialogContent, Container } from '@material-ui/core';

const DialogWindow = (props) => {
    const { handleClose, open, title, actions, content } = props;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                <Container>
                    {actions}
                </Container>
            </DialogActions>
        </Dialog>
    );
}

DialogWindow.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
};

export default DialogWindow;

