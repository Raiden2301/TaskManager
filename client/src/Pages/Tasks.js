import React from 'react';
import { connect } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
import { Container, Button } from '@material-ui/core';
import DatePicker from 'react-date-picker';

import TextInputBoxWrapper from './components/TextInputBoxWrapper'
import DialogWindow from './components/DialogWindow';
import AppLayout from '../shared/AppLayout';
// import EditableTable from '../utils/components/EditableTable';

import { getData, onSave } from '../actions/CommonActions';

import './Pages.css'

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
        this.props.getData({}, 'GET_TASKS');
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.props.taskObj && this.props.taskObj.tasks && this.setState({ loading: false })
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
        const fields = this.props.taskObj.tasks && getFields(this.props.taskObj.tasks[0]);
        let fieldsToSend = fields && [fields[1], fields[10], fields[5], fields[7], fields[9]];
        let rows = [];
        // eslint-disable-next-line array-callback-return
        this.props.taskObj && this.props.taskObj.tasks && this.props.taskObj.tasks.map((task, index) => {
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

        return (
            <AppLayout title="Tasks">
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
                    <React.Fragment>
                        {/* <EditableTable tableHead={fieldsToSend} rows={rows} /> */}
                        <Container className="buttons-container">
                            <Button variant="contained" className="primary-buttons" onClick={this.handleCreateTask}>
                                New Task
                            </Button>
                        </Container>
                    </React.Fragment>
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
    taskObj: state.taskObj
});

const mapDispatchToProps = {
    getData,
    onSave
};


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
