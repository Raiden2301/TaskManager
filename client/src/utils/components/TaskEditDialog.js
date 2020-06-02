import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import TextInput from './TextInput'

export default function TaskEditDialog(props) {
    const status = [
        {
            value: 'TO DO',
            label: 'TO DO',
        },
        {
            value: 'IN PROGRES',
            label: 'IN PROGRES',
        },
        {
            value: 'TO VERIFY',
            label: 'TO VERIFY',
        },
        {
            value: 'DONE',
            label: 'DONE',
        },
    ];

    return (
        <Dialog
            open={props.open}
        >
            <DialogTitle id="responsive-dialog-title"> Edit task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <span>Log hours</span>
                        </Grid>
                        <Grid item xs={8}>
                            <TextInput
                                id="logHours"
                                type="number"
                                label="Log Hours"
                                // error={props.error}
                                disabled={false}
                                required={false}
                                value={props.task && props.task.loggedTime}
                                onChange={(event) => { props.onChange(event, "loggedTime") }}
                                variant="standard"
                                placeholder="Log Hours"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <span>Change Status</span>
                        </Grid>
                        <Grid item xs={8}>
                            <TextInput
                                id="changeStatus"
                                type="number"
                                label="Change Status"
                                select={true}
                                // error={props.error}
                                disabled={false}
                                required={false}
                                value={props.task && props.task.status}
                                onChange={(event) => { props.onChange(event, "status") }}
                                variant="standard"
                                placeholder="Change Status"
                            >
                                {status.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextInput>
                        </Grid>
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCancel} color="primary" autoFocus>
                    Cancel
                </Button>
                <Button onClick={props.handleSave} color="primary" autoFocus>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}
