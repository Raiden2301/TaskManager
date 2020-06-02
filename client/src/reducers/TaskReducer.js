import Axios from 'axios';
import { getData, gotData } from '../actions/CommonActions';
import { store } from '../store';

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
            Axios.post('http://localhost:8081/tasks/save/', data)
                .then((response) => {
                    alert("Task was saved")
                })
                .catch((error) => {
                    alert("Something went wrong")
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
        default:
            return state;
    }
}