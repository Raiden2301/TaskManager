import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Axios from 'axios';
import { gotData } from '../actions/CommonActions';
import { store } from '../store';
import history from '../history';

export const projectReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PROJECTS': {
            let url = 'http://localhost:8081/projects/getProjects/';
            Axios.get(url)
                .then((response) => {
                    store.dispatch(gotData(response.data, 'GOT_PROJECTS'));
                })
                .catch((error) => {
                    console.log(error);
                });
            return state;
        }
        case 'GOT_PROJECTS': {
            return Object.assign({}, state, { projects: action.data });
        }
        case 'SAVE_PROJECT_BY_EMPLOYEE': {
            let data = action.data
            let id = action.employeeId
            Axios.post(`http://localhost:8081/projects/save/${id}`, data)
                .then((response) => {
                    alert("Project was saved")
                })
                .catch((error) => {
                    alert("Something went wrong")
                    console.log(error)
                })
            return state;

        }
        case 'EDIT_PROJECT': {
            let id = action.id;
            history.push(`/project/${id}`);
            return Object.assign({}, state, { projectToBeEdited: id });
        }
        case 'GET_PROJECT_BY_ID': {
            let id = action.id;
            let url = `http://localhost:8081/projects/getProject/${id}`;
            Axios.get(url)
                .then((response) => {
                    store.dispatch(gotData(response.data, 'GOT_PROJECT_BY_ID'));
                })
                .catch((error) => {
                    console.log(error);
                });
            return state;
        }
        case 'GOT_PROJECT_BY_ID': {
            return Object.assign({}, state, { requestedProject: action.data });
        }
        case 'GET_PROJECTS_BY_EMPLOYEE': {
            let employeeId = action.employeeId;
            let url = `http://localhost:8081/projects/getProjectsByEmployee/${employeeId}`;
            Axios.get(url)
                .then((response) => {
                    store.dispatch(gotData(response.data, 'GOT_PROJECTS_BY_EMPLOYEE'));
                })
                .catch((error) => {
                    console.log(error);
                });
            return state;
        }
        case 'GOT_PROJECTS_BY_EMPLOYEE': {
            return Object.assign({}, state, { employeeProjects: action.data });
        }
        case 'DELETE_PROJECT_BY_ID': {
            let id = action.id;
            let url = `http://localhost:8081/projects/deleteProject/${id}`;
            Axios.delete(url)
                .then((response) => {
                    const snackBar = () => {
                        return (
                            <Alert variant="filled" severity="success">
                                This is a success alert — check it out!
                            </Alert>
                        )
                    }
                    return Object.assign({}, state, { projectDeleted: snackBar });
                })
                .catch((error) => {
                    const snackBar = () => {
                        return (
                            <Alert variant="filled" severity="error">
                                This is a success alert — check it out!
                            </Alert>
                        )
                    }
                    console.log(error);
                    return Object.assign({}, state, { projectDeleted: snackBar });
                });
            return state;
        }
        default:
            return state;
    }
}