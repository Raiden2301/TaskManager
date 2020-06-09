import React from 'react';
import { connect } from 'react-redux';
import { Tooltip, TextField, Button } from '@material-ui/core'

import AppLayout from '../shared/AppLayout';
import history from '../history';

import { initializeLogin, updateLogin } from '../actions/CommonActions';

import './Pages.css'

const LoginPage = (props) => {
    const here = ' here '
    return (
        <AppLayout title="Login Page">
            <div className="home-page">
                <div className="login-forms">
                    <TextField className="form-fields" id="user-name" label="User Name" variant="outlined" />
                    <TextField className="form-fields" id="password" label="Password" variant="outlined" type="password" />
                    <div className="form-buttons">
                        <Button variant="contained" className="primary-buttons" onClick={() => props.updateLogin('UPDATE_LOGIN', true)}>
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
const mapStateToProps = (state, ownProps) => ({
    loginObj: state.loginObj
});

const mapDispatchToProps = {
    initializeLogin,
    updateLogin
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
