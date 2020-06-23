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
import { deleteProjectById, getProjectsByEmployee, saveProject } from '../actions/ProjectActions';

import './Pages.css'

const _ = require('lodash')
const loggedUserId = localStorage.getItem('loggedUserId')
function getFields(project) {
    let fields = [];
    // eslint-disable-next-line array-callback-return
    Object.entries(project).map(([key, value], index) => {
        fields.push(key);
    });

    return fields;
}

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            openDialog: false,
            openConfirmation: false,
            newProject: {
                name: '',
                description: '',
                startDate: new Date(),
                expectedDeliveryDate: new Date(),
            },
            emptyProjectData: {
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
    }

    handleCreateProject = () => {
        this.setState({
            openDialog: true
        })
    }

    handleClose = () => {
        this.setState({
            openDialog: false
        })
        this.setState({
            newProject: {
                ...this.state.emptyProjectData
            }
        })
    }

    handleReset = () => {
        this.setState({
            newProject: {
                ...this.state.emptyProjectData
            }
        })
    }

    handleSave = () => {
        this.props.saveProject("SAVE_PROJECT_BY_EMPLOYEE", this.state.newProject, this.props.employeeObj.loggedEmployee.id)
        this.setState({
            openDialog: false
        })
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
                        id="projectName"
                        label="Project Name"
                        // error={props.error}
                        disabled={false}
                        required={false}
                        value={this.state.newProject.name}
                        onChange={(event) => this.setState({
                            newProject: {
                                ...this.state.newProject,
                                name: event.target.value
                            }
                        })}
                        variant="standard"
                        placeholder="Project Name"
                    />
                    <TextInputBoxWrapper
                        id="projectDescription"
                        label="Project Description"
                        // error={props.error}
                        disabled={false}
                        required={false}
                        value={this.state.newProject.description}
                        onChange={(event) => this.setState({
                            newProject: {
                                ...this.state.newProject,
                                description: event.target.value
                            }
                        })}
                        variant="standard"
                        placeholder="Project Description"
                    />
                    <Container className="date-picker-wrapper">
                        <DatePicker
                            id="startDate"
                            className="date-picker"
                            showLeadingZeros={true}
                            dateFormat="dd-MM-y"
                            value={this.state.newProject.startDate}
                            onChange={date => {
                                this.setState({
                                    newProject: {
                                        ...this.state.newProject,
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
                            value={this.state.newProject.expectedDeliveryDate}
                            onChange={date => {
                                this.setState({
                                    newProject: {
                                        ...this.state.newProject,
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
        const assignedProjects = this.props.employeeObj && this.props.employeeObj.loggedEmployee && this.props.employeeObj.loggedEmployee.assignedProjects
        const fields = assignedProjects && getFields(assignedProjects[0]);
        let fieldsToSend = fields && [fields[0], fields[1], fields[3], fields[4]];

        let header = [];
        fieldsToSend && fieldsToSend.map((field, index) => {
            let columnHeader = {
                title: _.startCase(field),
                field: field
            }
            header.push(columnHeader)
        })

        let data = [];
        assignedProjects && assignedProjects.map((project, index) => {
            data.push(project)
        })

        return (
            <AppLayout title="Projects">
                {!this.props.employeeObj.loggedEmployee
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

                    : <React.Fragment>
                        <EnhancedTable
                            columns={header}
                            data={data}
                            name="projects"
                        />
                        <Container className="buttons-container">
                            <Button variant="contained" className="primary-buttons" onClick={this.handleCreateProject}>
                                NEW Project
                            </Button>
                        </Container>
                    </React.Fragment>
                }

                <DialogWindow
                    title="Create new project"
                    open={this.state.openDialog}
                    handleClose={this.handleClose}
                    actions={this.getDialogActions()}
                    content={this.getDialogContent()}
                />
            </AppLayout>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    projectObj: state.projectObj,
    employeeObj: state.employeeObj
});

const mapDispatchToProps = {
    getData,
    onSave,
    deleteProjectById,
    getProjectsByEmployee,
    getDataById,
    saveProject
};


export default connect(mapStateToProps, mapDispatchToProps)(Projects);
