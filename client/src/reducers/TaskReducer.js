import Axios from 'axios';
import { getDataById, gotData } from '../actions/CommonActions';
import { getProjectById } from '../actions/ProjectActions'
import { callSnack } from '../actions/SnackActions'
import { store } from '../store';

const loggedUserId = localStorage.getItem('loggedUserId')

export const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TASKS': {
            let url = 'http://localhost:8081/tasks/getTasks/';
            Axios.get(url)
                .then((response) => {
                    store.dispatch(gotData(response.data, 'GOT_TASKS'));
                })
                .catch((error) => {
                    console.log(error);
                });
            return state;
        }
        case 'GOT_TASKS': {
            return Object.assign({}, state, { tasks: action.data });
        }
        case 'SAVE_TASK': {
            let data = action.data
            let projectId = action.neededId
            Axios.post('http://localhost:8081/tasks/save/', data)
                .then((response) => {
                    store.dispatch(getProjectById('GET_PROJECT_BY_ID', projectId));
                    store.dispatch(callSnack('SUCCESS', 'Task was saved!'));
                })
                .catch((error) => {
                    store.dispatch(callSnack('FAILURE', 'Something went wrong!'));
                    console.log(error)
                })
            return state;
        }
        case 'GET_TASKS_BY_PROJECT': {
            let id = action.id
            let url = `http://localhost:8081/tasks/getTaskByProject/${id}/`;
            Axios.get(url)
                .then((response) => {
                    store.dispatch(gotData(response.data, 'GOT_TASKS_BY_PROJECT'));
                })
                .catch((error) => {
                    console.log(error);
                });
            return state;
        }
        case 'GOT_TASKS_BY_PROJECT': {
            return Object.assign({}, state, { tasksByProject: action.data });
        }
        case 'DELETE_TASK_BY_ID': {
            let taskId = action.taskId;
            let projectId = action.projectId
            let url = `http://localhost:8081/tasks/deleteTask/${taskId}/`;
            Axios.delete(url)
                .then((response) => {
                    store.dispatch(getProjectById('GET_PROJECT_BY_ID', projectId));
                    store.dispatch(callSnack('SUCCESS', 'Task was deleted!'));
                })
                .catch((error) => {
                    store.dispatch(callSnack('FAILURE', 'Something went wrong!'));
                    console.log(error)
                });
            return state;
        }
        default:
            return state;
    }
}