import React from 'react';
import { connect } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
import { Container, Button } from '@material-ui/core';
import DatePicker from 'react-date-picker';

import TextInputBoxWrapper from './components/TextInputBoxWrapper'
import DialogWindow from './components/DialogWindow';
import AppLayout from '../shared/AppLayout';
import EnhancedTable from '../utils/components/EnhancedTable';

import { getData, onSave, getDataById } from '../actions/CommonActions';

import './Pages.css'

const _ = require('lodash')
const loggedUserId = localStorage.getItem('loggedUserId')

function getFields(task) {
    let fields = [];
    // eslint-disable-next-line array-callback-return
    Object.entries(task).map(([key, value], index) => {
        fields.push(key);
    });

    return fields;
}

class Tasks extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            openDialog: false,
            newTask: {
                name: '',
                description: '',
                startDate: new Date(),
                expectedDeliveryDate: new Date(),
            },
            emptyTaskData: {
                name: '',
                description: '',
                startDate: new Date(),
                expectedDeliveryDate: new Date(),
            }
        }
    }

    componentDidMount() {
        if (this.props.employeeObj.loggedEmployee === undefined) {
            this.props.getDataById('GET_EMPLOYEE_BY_ID', loggedUserId)
        }
        this.props.employeeObj &&
            this.props.employeeObj.loggedEmployee && this.setState({ loading: false })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.props.employeeObj &&
                this.props.employeeObj.loggedEmployee && this.setState({ loading: false })
        }
    }

    handleCreateTask = () => {
        this.setState({
            openDialog: true
        })
    }

    handleClose = () => {
        this.setState({
            openDialog: false
        })
        this.setState({
            newTask: {
                ...this.state.emptyTaskData
            }
        })
    }

    handleReset = () => {
        this.setState({
            newTask: {
                ...this.state.emptyTaskData
            }
        })
    }

    handleSave = () => {
        this.props.onSave("SAVE_TASK", this.state.newTask)
    }

    getDialogActions = () => {
        return (
            <Container className="dialog-container">
                <Button variant="contained" className="primary-buttons" onClick={this.handleClose}>
                    Cancel
                </Button>
                <Button variant="contained" className="primary-buttons" onClick={this.handleReset}>
                    Reset
                </Button>
                <Button variant="contained" className="primary-buttons" onClick={this.handleSave}>
                    Save
                </Button>
            </Container>
        )
    }

    getDialogContent = () => {
        return (
            <Container className="dialog-container">
                <div className="grid-vertical">
                    <TextInputBoxWrapper
                        id="taskName"
                        label="Task Name"
                        // error={props.error}
                        disabled={false}
                        required={false}
                        value={this.state.newTask.name}
                        onChange={(event) => this.setState({
                            newTask: {
                                ...this.state.newTask,
                                name: event.target.value
                            }
                        })}
                        variant="standard"
                        placeholder="Task Name"
                    />
                    <TextInputBoxWrapper
                        id="taskDescription"
                        label="Task Description"
                        // error={props.error}
                        disabled={false}
                        required={false}
                        value={this.state.newTask.description}
                        onChange={(event) => this.setState({
                            newTask: {
                                ...this.state.newTask,
                                description: event.target.value
                            }
                        })}
                        variant="standard"
                        placeholder="Task Description"
                    />
                    <Container className="date-picker-wrapper">
                        <DatePicker
                            id="startDate"
                            className="date-picker"
                            showLeadingZeros={true}
                            dateFormat="dd-MM-y"
                            value={this.state.newTask.startDate}
                            onChange={date => {
                                this.setState({
                                    newTask: {
                                        ...this.state.newTask,
                                        startDate: date
                                    }
                                })
                            }}
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
                            value={this.state.newTask.expectedDeliveryDate}
                            onChange={date => {
                                this.setState({
                                    newTask: {
                                        ...this.state.newTask,
                                        expectedDeliveryDate: date
                                    }
                                })
                            }}
                        />
                    </Container>

                </div>
            </Container>
        )
    }

    render() {
        const assignedTasks = this.props.employeeObj &&
            this.props.employeeObj.loggedEmployee &&
            this.props.employeeObj.loggedEmployee.assignedTasks
        const assignedProjects = this.props.employeeObj &&
            this.props.employeeObj.loggedEmployee &&
            this.props.employeeObj.loggedEmployee.assignedProjects
        const fields = assignedTasks && getFields(assignedTasks[0]);
        let fieldsToSend = fields && [fields[1], fields[2], fields[5], fields[6], fields[7], fields[8]];

        let header = [];
        fieldsToSend && fieldsToSend.map((field, index) => {
            let columnHeader = {
                title: _.startCase(field),
                field: field
            }
            header.push(columnHeader)
        })
        header.push({
            title: 'Project',
            field: "project"
        })

        let data = [];
        assignedTasks && assignedTasks.map((task, index) => {
            let taskToPush = {
                ...task
            }
            assignedProjects && assignedProjects.map((proj, index) => {
                if (proj.id == task.projectId) {
                    taskToPush = {
                        ...taskToPush,
                        project: `${proj.name}`
                    }
                }
            })
            data.push(taskToPush)
        })

        return (
            <AppLayout title="Tasks" maxWidth="lg">
                {this.state.loading
                    ? <div className="loading-spinner">
                        <BeatLoader
                            // css={override}
                            size={20}
                            margin={10}
                            css="loading-spinner"
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                    </div>
                    :
                    <Container className="tasksRange">
                        {/* <EditableTable tableHead={fieldsToSend} rows={rows} /> */}
                        <EnhancedTable
                            columns={header}
                            data={data}
                            name="tasks"
                        />
                        {/* <Container className="buttons-container">
                            <Button variant="contained" className="primary-buttons" onClick={this.handleCreateTask}>
                                New Task
                            </Button>
                        </Container> */}
                    </Container>
                }


                <DialogWindow
                    title="Create new task"
                    open={this.state.openDialog}
                    handleClose={this.handleClose}
                    actions={this.getDialogActions()}
                    content={this.getDialogContent()}
                />
            </AppLayout >
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    taskObj: state.taskObj,
    employeeObj: state.employeeObj
});

const mapDispatchToProps = {
    getData,
    onSave,
    getDataById
};


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
