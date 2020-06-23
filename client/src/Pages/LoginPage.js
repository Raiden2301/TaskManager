import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Tooltip, TextField, Button } from '@material-ui/core'

import AppLayout from '../shared/AppLayout';
import history from '../history';

import { logIn } from '../actions/CommonActions';

import './Pages.css'

const LoginPage = (props) => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    let isLoggedIn = localStorage.getItem('loggedIn')
    return (
        <AppLayout title="Login Page">
            <div className="home-page">
                <div className="login-forms">
                    <TextField
                        className="form-fields"
                        id="username"
                        label="User Name"
                        variant="outlined"
                        value={loginData.username}
                        onChange={(event) => {
                            setLoginData({ ...loginData, username: event.target.value })
                        }}
                    />
                    <TextField
                        className="form-fields"
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={loginData.password}
                        onChange={(event) => {
                            setLoginData({ ...loginData, password: event.target.value })
                        }}
                    />
                    <div className="form-buttons">
                        <Button
                            variant="contained"
                            className="primary-buttons"
                            onClick={() => props.logIn('LOG_IN', loginData)}
                        >
                            Log in
                        </Button>
                        <Tooltip title="Not implemented yet" aria-label="add">
                            <Button variant="contained" className="primary-buttons">
                                Sign In
                        </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
const mapStateToProps = (state) => ({
    loginObj: state.loginObj
});

const mapDispatchToProps = {
    logIn
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
