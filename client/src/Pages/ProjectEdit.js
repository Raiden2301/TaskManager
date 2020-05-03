import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import DatePicker from 'react-date-picker';

// eslint-disable-next-line no-unused-vars
import { Container, Button, Grid, TextField, Paper, Typography } from '@material-ui/core';

import EditableTable from '../utils/components/EditableTable';
import AppLayout from '../shared/AppLayout';
import TextInputBoxWrapper from './components/TextInputBoxWrapper'
import DialogWindow from './components/DialogWindow';
import { getData, onSave } from '../actions/CommonActions';
import { getProjectById } from '../actions/ProjectActions'
import { getTasksByProject } from '../actions/TaskActions'

import './Pages.css'

function getFields(task) {
    let fields = [];
    // eslint-disable-next-line array-callback-return
    Object.entries(task).map(([key, value], index) => {
        fields.push(key);
    });

    return fields;
}

const ProjectEdit = (props) => {

    let { id } = useParams()
    // eslint-disable-next-line no-unused-vars
    const [projectId, setProjectId] = useState(id)
    useEffect(() => {
        props.getProjectById('GET_PROJECT_BY_ID', projectId)
        props.getTasksByProject('GET_TASKS_BY_PROJECT', projectId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectId]);

    const project = props.projectObj.requestedProject
    const tasks = props.taskObj.tasksByProject ? props.taskObj.tasksByProject : null


    const fields = tasks ? getFields(tasks[0]) : null;
    let fieldsToSend = fields && [fields[1], fields[10], fields[5], fields[7], fields[9]];
    let rows = [];
    // eslint-disable-next-line array-callback-return
    tasks && tasks.map((task, index) => {
        let row = [];
        // eslint-disable-next-line array-callback-return
        fieldsToSend.map((field, index) => {
            if (field === "loggedTime") {
                row.push(`${task[field]}h`)
            } else {
                row.push(task[field])
            }
        })
        rows.push(row)
    })

    const emptyTaskData = {
        name: '',
        description: '',
        startDate: new Date(),
        expectedDeliveryDate: new Date(),
        projectId: id,
        loggedTime: 0,
        estimatedTime: '',
        status: 'TO DO'
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
        props.onSave("SAVE_TASK", taskDetails)
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
    // const getDescription = () =>{
    //     return (
    //         <TextInputBoxWrapper
    //         id="taskDescriptionDialog"
    //         label="Description"
    //         // error={props.error}
    //         disabled={false}
    //         required={false}
    //         value={taskDetails.description}
    //         onChange={(event) => {
    //             setTaskDetails({ ...taskDetails, description: event.target.value })
    //         }}
    //         variant="standard"
    //         placeholder="Task Description"
    //     />
    //     )
    // }

    const getDialogContent = () => {
        return (
            <Container className="dialog-container">
                <div className="grid-vertical">
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

                </div>
            </Container>
        )
    }

    return (
        < AppLayout title="Edit Project" maxWidth="xl">
            <Container className="project-horizontal-layout">
                <Grid container justify="center" >
                    <Grid item xs={2}>
                        <div>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper elevation={3} className="edit-project-paper" >
                            <div className="place-left">
                                <h5>{project && project.name}</h5>
                            </div>
                            <TextField
                                id="project-name"
                                label="Nume"
                                className="project-name"
                            />
                            <TextField
                                id="project-description"
                                label="Descriere"
                                className="project-description"
                                multiline
                                rows={4}
                            />
                            <Typography variant="subtitle1" gutterBottom className="date-pickers">
                                Start Date:
                               <DatePicker
                                    id="startDate"
                                    className="project-dates"
                                    showLeadingZeros={true}
                                    dateFormat="dd-MM-y"
                                // value={this.state.newProject.startDate}
                                // onChange={date => {
                                //     this.setState({
                                //         newProject: {
                                //             ...this.state.newProject,
                                //             startDate: date
                                //         }
                                //     })
                                // }}
                                />
                                End Date:
                                <DatePicker
                                    id="deliveryDate"
                                    className="project-dates"
                                    // calendarIcon={null}
                                    // clearIcon={null}
                                    showLeadingZeros={true}
                                    dateFormat="dd/MM/yyyy"
                                // value={this.state.newProject.expectedDeliveryDate}
                                // onChange={date => {
                                //     this.setState({
                                //         newProject: {
                                //             ...this.state.newProject,
                                //             expectedDeliveryDate: date
                                //         }
                                //     })
                                // }}
                                />
                            </Typography>
                            <Container className="buttons-container">
                                <Button variant="contained" className="primary-buttons"  >
                                    Update details
                            </Button>
                            </Container>
                        </Paper>
                        <Paper elevation={3} className="add-task-paper">
                            <div className="place-left">
                                <h5>Tasks</h5>
                            </div>
                            <EditableTable tableHead={fieldsToSend} rows={rows} />
                            <Container className="buttons-container">
                                <Button variant="contained" className="primary-buttons" onClick={() => handleCreateTask()}>
                                    Add task
                            </Button>
                            </Container>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper elevation={3}>
                            <div>
                                <h4>Comments</h4>
                            </div>
                        </Paper>
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
    taskObj: state.taskObj
});

const mapDispatchToProps = {
    getData,
    onSave,
    getProjectById,
    getTasksByProject
};


export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);
