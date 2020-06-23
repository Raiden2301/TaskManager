import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import DatePicker from 'react-date-picker';

// eslint-disable-next-line no-unused-vars
import { Container, Button, Grid, TextField, Paper, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

import EnhancedTable from '../utils/components/EnhancedTable';
import AppLayout from '../shared/AppLayout';
import TextInputBoxWrapper from './components/TextInputBoxWrapper'
import DialogWindow from './components/DialogWindow';
import { getData, onSave } from '../actions/CommonActions';
import { getAllEmployees } from '../actions/EmployeeActions';
import { getProjectById } from '../actions/ProjectActions'
import { getTasksByProject } from '../actions/TaskActions'

import './Pages.css'

const _ = require('lodash');

const priority = [
    {
        value: 'CRITICAL',
        label: 'CRITICAL',
    },
    {
        value: 'MAJOR',
        label: 'MAJOR',
    },
    {
        value: 'MINOR',
        label: 'MINOR',
    },
    {
        value: 'NONE',
        label: 'NONE',
    },
];

function getFields(task) {
    let fields = [];
    if (task) {
        // eslint-disable-next-line array-callback-return
        Object.entries(task).map(([key, value], index) => {
            fields.push(key);
        });
    }

    return fields;
}

const ProjectEdit = (props) => {
    const loggedUserId = localStorage.getItem('loggedUserId')
    let { id } = useParams()
    // eslint-disable-next-line no-unused-vars
    const [projectId, setProjectId] = useState(id)
    useEffect(() => {
        props.getProjectById('GET_PROJECT_BY_ID', projectId)
        props.getAllEmployees('GET_EMPLOYEES')
        // props.getTasksByProject('GET_TASKS_BY_PROJECT', projectId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectId]);

    const project = props.projectObj.requestedProject
    const tasks = project ? project.tasks : null
    const employees = props.employeeObj && props.employeeObj.employees
    const fields = tasks ? getFields(tasks[0]) : null;
    let fieldsToSend = fields && [fields[1], fields[2], fields[8], fields[5], fields[6], fields[7]];

    let header = [];
    fieldsToSend && fieldsToSend.map((field, index) => {
        let columnHeader = {
            title: _.startCase(field),
            field: field
        }

        header.push(columnHeader)
    })
    header.push({
        title: 'Assignee',
        field: "assignee"
    })

    let tasksData = [];
    tasks && tasks.map((task, index) => {
        let taskToPush = {
            ...task, cellStyle: {
                backgroundColor: '#039be5',
                color: '#FFF'
            }
        }
        employees && employees.map((emp, index) => {
            if (emp.id === taskToPush.employeeId) {
                taskToPush = {
                    ...taskToPush,
                    assignee: `${emp.firstName} ${emp.lastName}`
                }
            }
        })
        if (taskToPush.employeeId == loggedUserId) {
            taskToPush = {
                ...taskToPush,
                disabled: false
            }
        } else {
            taskToPush = {
                ...taskToPush,
                disabled: true
            }
        }
        tasksData.push(taskToPush)
    })

    const emptyTaskData = {
        name: '',
        description: '',
        startDate: new Date(),
        expectedDeliveryDate: new Date(),
        employeeId: loggedUserId,
        projectId: id,
        loggedTime: 0,
        estimatedTime: '',
        status: 'TO DO',
        priority: 'NONE'
    }

    const [open, setOpen] = useState(false)
    const [taskDetails, setTaskDetails] = useState({
        name: '',
        description: '',
        estimatedTime: 0,
        startDate: new Date(),
        expectedDeliveryDate: new Date()
    })

    const handleCreateTask = () => {
        setOpen(true)
        setTaskDetails(emptyTaskData)
    }

    const handleClose = () => {
        setOpen(false)
        setTaskDetails(emptyTaskData)
    }

    const handleReset = () => {
        setTaskDetails(emptyTaskData)
    }

    const handleSave = () => {
        props.onSave("SAVE_TASK", taskDetails, projectId)
        setOpen(false)
    }

    const getDialogActions = () => {
        return (
            <Container className="dialog-container">
                <Button variant="contained" className="primary-buttons" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="contained" className="primary-buttons" onClick={handleReset}>
                    Reset
                </Button>
                <Button variant="contained" className="primary-buttons" onClick={handleSave}>
                    Save
                </Button>
            </Container>
        )
    }

    const getDialogContent = () => {
        return (
            <Container className="dialog-container">
                <div className="grid-vertical">
                    <Grid container spacing={0}>
                        <Grid item xs={4} className="add-task-label">
                            <Typography variant="subtitle1" gutterBottom>
                                Task name
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextInputBoxWrapper
                                id="taskName"
                                label="Task Name"
                                // error={props.error}
                                disabled={false}
                                required={false}
                                value={taskDetails.name}
                                onChange={(event) => {
                                    setTaskDetails({ ...taskDetails, name: event.target.value })
                                }}
                                variant="standard"
                                placeholder="Task Name"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={4} className="add-task-label">
                            <Typography variant="subtitle1" gutterBottom>
                                Task description
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextInputBoxWrapper
                                id="taskDescription"
                                label="Task Description"
                                // error={props.error}
                                disabled={false}
                                required={false}
                                value={taskDetails.description}
                                onChange={(event) => {
                                    setTaskDetails({ ...taskDetails, description: event.target.value })
                                }}
                                variant="standard"
                                placeholder="Task Description"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={4} className="add-task-label">
                            <Typography variant="subtitle1" gutterBottom>
                                Estimated time
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextInputBoxWrapper
                                id="estimatedTime"
                                type="number"
                                label="Estimated Time"
                                // error={props.error}
                                disabled={false}
                                required={false}
                                value={taskDetails.estimatedTime}
                                onChange={(event) => {
                                    setTaskDetails({ ...taskDetails, estimatedTime: event.target.value })
                                }}
                                variant="standard"
                                placeholder="Estimated hours"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={4} className="add-task-label">
                            <Typography variant="subtitle1" gutterBottom>
                                Priority
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextInputBoxWrapper
                                id="priority"
                                type="number"
                                label="Priority"
                                select={true}
                                // error={props.error}
                                disabled={false}
                                required={false}
                                value={taskDetails.priority}
                                onChange={(event) => {
                                    setTaskDetails({ ...taskDetails, priority: event.target.value })
                                }}
                                variant="standard"
                                placeholder="Change priority"
                            >
                                {priority.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextInputBoxWrapper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={4} className="add-task-label">
                            <Typography variant="subtitle1" gutterBottom>
                                Assignee
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <TextInputBoxWrapper
                                id="assignee"
                                label="Assignee"
                                select={true}
                                // error={props.error}
                                disabled={false}
                                required={false}
                                value={taskDetails.employeeId}
                                onChange={(event) => {
                                    setTaskDetails({ ...taskDetails, employeeId: event.target.value })
                                }}
                                variant="standard"
                                placeholder="Assign task"
                            >
                                {employees && employees.map((emp) => (
                                    <MenuItem key={emp.id} value={emp.id}>
                                        {emp.firstName} {emp.lastName}
                                    </MenuItem>
                                ))}
                            </TextInputBoxWrapper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={4} className="add-task-label">
                            <Typography variant="subtitle1" gutterBottom>
                                Start date
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Container className="date-picker-wrapper">
                                <DatePicker
                                    id="startDate"
                                    className="date-picker"
                                    showLeadingZeros={true}
                                    dateFormat="dd-MM-y"
                                    value={taskDetails.startDate}
                                    onChange={(date) => setTaskDetails({ ...taskDetails, startDate: date })}
                                />
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={4} className="add-task-label">
                            <Typography variant="subtitle1" gutterBottom>
                                Expected delivery date
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Container className="date-picker-wrapper">
                                <DatePicker
                                    id="deliveryDate"
                                    className="date-picker"
                                    // calendarIcon={null}
                                    // clearIcon={null}
                                    showLeadingZeros={true}
                                    dateFormat="dd/MM/yyyy"
                                    value={taskDetails.expectedDeliveryDate}
                                    onChange={(date) => setTaskDetails({ ...taskDetails, expectedDeliveryDate: date })}
                                />
                            </Container>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        )
    }

    return (
        < AppLayout title="Manage Project" maxWidth="xl">
            <Container className="project-horizontal-layout">
                <Grid container justify="center" >
                    <Grid item xs={1}>
                        <div>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <EnhancedTable
                            columns={header}
                            data={tasksData}
                            name="tasks"
                        />
                        <Container className="buttons-container">
                            <Button variant="contained" className="primary-buttons" onClick={() => handleCreateTask()}>
                                Add task
                            </Button>
                        </Container>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Container>
            <DialogWindow
                title="Create new task"
                open={open}
                handleClose={handleClose}
                actions={getDialogActions()}
                content={getDialogContent()}
            />
        </AppLayout >
    )
}

const mapStateToProps = (state, ownProps) => ({
    projectObj: state.projectObj,
    employeeObj: state.employeeObj
    // taskObj: state.taskObj
});

const mapDispatchToProps = {
    getAllEmployees,
    onSave,
    getProjectById,
    getTasksByProject
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);
