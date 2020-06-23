import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, TextField, Box, Button } from '@material-ui/core';

import AppLayout from '../shared/AppLayout';
import { getDataById, onSave } from '../actions/CommonActions';

import './Pages.css'

const ReportPage = (props) => {

    const loggedUserId = localStorage.getItem('loggedUserId')
    const isLoggedIn = localStorage.getItem('loggedIn')
    const employee = props.employeeObj && props.employeeObj.loggedEmployee
    const emptyReport = {

        subject: '',
        message: ''
    }

    const [mail, setMail] = useState(emptyReport)

    useEffect(() => {
        props.getDataById('GET_EMPLOYEE_BY_ID', loggedUserId)
    }, [loggedUserId]);


    const handleChange = (event) => {
        setMail({ ...mail, [event.target.id]: event.target.value })
    }

    const handleSend = () => {
        let mailToSend = {
            ...mail
        }
        if (isLoggedIn === 'true') {
            mailToSend = {
                ...mail,
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
            }
        }
        props.onSave('SEND_REPORT', mail)
    }


    return (
        <AppLayout title="Report a problem" maxWidth="sm">
            <Box width={250} className="reportBox">
                {isLoggedIn === 'true' ?
                    <TextField
                        id="firstName"
                        disabled={true}
                        value={employee && employee.firstName}
                        helperText="First Name"
                        variant="outlined"
                    />
                    :
                    <TextField
                        id="firstName"
                        label="First Name"
                        variant="outlined"
                        onChange={(event) => { handleChange(event) }} />
                }

            </Box>
            <Box width={250} className="reportBox">
                {isLoggedIn === 'true' ?
                    <TextField
                        id="lastName"
                        disabled={true}
                        value={employee && employee.lastName}
                        helperText="Last Name"
                        variant="outlined"
                    />
                    :
                    <TextField
                        id="lastName"
                        label="Last Name"
                        variant="outlined"
                        onChange={(event) => { handleChange(event) }} />
                }
            </Box>
            <Box width={250} className="reportBox">
                {isLoggedIn === 'true' ?
                    <TextField
                        id="email"
                        disabled={true}
                        value={employee && employee.email}
                        helperText="Email"
                        variant="outlined"
                    />
                    :
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        onChange={(event) => { handleChange(event) }} />
                }
            </Box>
            <Box width={250} className="reportBox">
                <TextField
                    id="subject"
                    label="Subject"
                    variant="outlined"
                    onChange={(event) => { handleChange(event) }} />
            </Box>
            <Box width={450} className="reportBoxMessage">
                <TextField
                    id="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    className="reportMessage"
                    onChange={(event) => { handleChange(event) }} />
            </Box>

            <div className="reportButtonDiv">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSend}

                >
                    Send email
            </Button>
            </div>

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

