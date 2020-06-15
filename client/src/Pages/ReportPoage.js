import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, TextField, Box, Button } from '@material-ui/core';

import AppLayout from '../shared/AppLayout';
import { getDataById, onSave } from '../actions/CommonActions';

const ReportPage = (props) => {

    const loggedUserId = localStorage.getItem('loggedUserId')
    const employee = props.employeeObj && props.employeeObj.loggedEmployee

    const emptyReport = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    }

    const [mail, setMail] = useState({})

    useEffect(() => {
        props.getDataById('GET_EMPLOYEE_BY_ID', loggedUserId)
    }, [loggedUserId]);



    const handleChange = (event) => {
        setMail({ ...mail, [event.target.id]: event.target.value })
    }

    const handleSend = () => {
        console.log(mail)
        props.onSave('SEND_REPORT', mail)
    }


    return (
        <AppLayout title="Report a problem">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Box >
                        <TextField
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            onChange={(event) => { handleChange(event) }} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <TextField
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                            onChange={(event) => { handleChange(event) }} />
                    </Box>
                </Grid>
            </Grid>
            <Box >
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={(event) => { handleChange(event) }} />
            </Box>
            <Box >
                <TextField
                    id="subject"
                    label="Subject"
                    variant="outlined"
                    onChange={(event) => { handleChange(event) }} />
            </Box>
            <Box >
                <TextField
                    id="message"
                    label="Message"
                    variant="outlined"
                    onChange={(event) => { handleChange(event) }} />
            </Box>

            <Button
                variant="contained"
                color="primary"
                onClick={handleSend}
            >
                Send email
            </Button>
        </AppLayout>
    )
}

const mapStateToProps = (state) => ({
    employeeObj: state.employeeObj
});

const mapDispatchToProps = {
    getDataById,
    onSave
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);

