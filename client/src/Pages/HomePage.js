import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Typography } from '@material-ui/core'

import AppLayout from '../shared/AppLayout';
import history from '../history';
import { getDataById } from '../actions/CommonActions';

const HomePage = (props) => {
    const here = ' here '

    const loggedUserId = localStorage.getItem('loggedUserId')

    useEffect(() => {
        props.getDataById('GET_EMPLOYEE_BY_ID', loggedUserId)
    }, [loggedUserId]);

    const employee = props.employeeObj && props.employeeObj.loggedEmployee

    return (
        <AppLayout title="Home Page">
            {console.log(employee, loggedUserId)}
            <div className="home-page">
                <Typography variant="h6">
                    Welcome {employee && employee.firstName}! You can check your projects from
                    <Link href="#" onClick={() => {
                        history.push('/projects');
                    }}>
                        {here}
                    </Link>
                     or by using the menu above
                </Typography>
            </div>
        </AppLayout>
    )
}

const mapStateToProps = (state) => ({
    employeeObj: state.employeeObj
});

const mapDispatchToProps = {
    getDataById,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

