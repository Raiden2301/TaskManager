import Axios from 'axios';
import { gotData } from '../actions/CommonActions';
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
            console.log(action)
            let data = action.data
            Axios.post('http://localhost:8081/tasks/save/', data)
                .then((response) => {
                    alert("Task was saved")
                    console.log(response)
                })
                .catch((error) => {
                    alert("Something went wrong")
                    console.log(error)
                })
            return state;
        }
        default:
            return state;
    }
}