import React from 'react';
import { connect } from 'react-redux';
import BeatLoader from "react-spinners/BeatLoader";
import { Container, Button, TextField } from '@material-ui/core';
import DatePicker from 'react-date-picker';

import TextInputBoxWrapper from './components/TextInputBoxWrapper'
import DialogWindow from './components/DialogWindow';
import AppLayout from '../shared/AppLayout';
import EditableTable from '../utils/components/EditableTable';
import { getData } from '../actions/CommonActions';

import './Pages.css'

function getFields(project) {
    let fields = [];
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
            newProject: {
                name: '',
                description: '',
                selectedStartDate: new Date(),
                selectedDeliveryDate: new Date(),
            },
            emptyProjectData: {
                name: '',
                description: '',
                selectedStartDate: new Date(),
                selectedDeliveryDate: new Date(),
            }
        }
    }

    componentDidMount() {
        this.props.getData({}, 'GET_PROJECTS');
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.props.projectObj && this.props.projectObj.projects && this.setState({ loading: false })
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
                            value={this.state.newProject.selectedStartDate}
                            onChange={date => {
                                this.setState({
                                    newProject: {
                                        ...this.state.newProject,
                                        selectedStartDate: date
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
                            value={this.state.newProject.selectedDeliveryDate}
                            onChange={date => {
                                this.setState({
                                    newProject: {
                                        ...this.state.newProject,
                                        selectedDeliveryDate: date
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
        //To do: make the same changes as in projects
        console.log(this.state)
        const fields = this.props.projectObj.projects && getFields(this.props.projectObj.projects[0]);
        let fieldsToSend = fields && [fields[0], fields[1], fields[6], fields[7]];
        let rows = [];
        this.props.projectObj && this.props.projectObj.projects && this.props.projectObj.projects.map((project, index) => {
            let row = [];
            fieldsToSend.map((field, index) => {
                row.push(project[field])
            })
            rows.push(row)
        })
        return (
            <AppLayout title="Projects">
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

                    : <React.Fragment>
                        <EditableTable tableHead={fieldsToSend} rows={rows} />
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
    projectObj: state.projectObj
});

const mapDispatchToProps = {
    getData
};


export default connect(mapStateToProps, mapDispatchToProps)(Projects);
