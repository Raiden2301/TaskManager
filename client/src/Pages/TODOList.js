import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Typography } from '@material-ui/core'

import TODOItem from './components/TODOItem'
import AppLayout from '../shared/AppLayout';
import history from '../history';

import { getDataById } from '../actions/CommonActions';

const TODOList = (props) => {
    const here = ' here '

    const loggedUserId = localStorage.getItem('loggedUserId')

    useEffect(() => {
        props.getDataById('GET_EMPLOYEE_BY_ID', loggedUserId)
    }, [loggedUserId]);

    const todoList = props.employeeObj && props.employeeObj.loggedEmployee && props.employeeObj.loggedEmployee.todoList
    console.log(todoList)
    return (
        <AppLayout title="My TO DO's">
            <div className="home-page">
                {
                    todoList && todoList.map((todo, index) => {
                        const checked = todo.status === 'TODO' ? false : true
                        return (
                            <TODOItem
                                title={todo.name}
                                description={todo.description}
                                checked={checked}
                            />
                        )
                    })
                }
            </div>
        </AppLayout>
    )
}

const mapStateToProps = (state) => ({
    employeeObj: state.employeeObj
});

const mapDispatchToProps = {
    getDataById
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);

