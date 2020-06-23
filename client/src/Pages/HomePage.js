import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Typography } from '@material-ui/core'

import AppLayout from '../shared/AppLayout';
import history from '../history';
import { getDataById } from '../actions/CommonActions';

const HomePage = (props) => {
    const here = ' here '
    const here2 = ' Here '
    const thisPage = ' this '

    const loggedUserId = localStorage.getItem('loggedUserId')

    useEffect(() => {
        props.getDataById('GET_EMPLOYEE_BY_ID', loggedUserId)
    }, [loggedUserId]);

    const employee = props.employeeObj && props.employeeObj.loggedEmployee

    return (
        <AppLayout title="Home Page">
            <div className="home-page">
                <Typography variant="h5" className="homepageInstructions">
                    Welcome to Task Manager, {employee && employee.firstName}!
                </Typography>
                <div className="homepageInstructions">
                    <ul>
                        <li>
                            <Typography variant="h6">
                                You can check your projects from
                    <Link href="#" onClick={() => {
                                    history.push('/projects');
                                }}>
                                    {here}
                                </Link>
                     or by using the menu above.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h6">
                                If you need, you can see your current tasks from all your projects by accessing
                                <Link href="#" onClick={() => {
                                    history.push('/tasks');
                                }}>
                                    {thisPage}
                                </Link>
                                page
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h6">
                                <Link href="#" onClick={() => {
                                    history.push('/todo');
                                }}>
                                    {here2}
                                </Link>
                                you can add personal To Do's
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h6">
                                If you find bug's or if you wish to see a new feature regarding this web page you can send your message from
                                <Link href="#" onClick={() => {
                                    history.push('/report');
                                }}>
                                    {here}
                                </Link>
                            </Typography>
                        </li>
                    </ul>

                </div>

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

