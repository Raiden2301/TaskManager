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
            return Object.assign({}, state, { tests: action.data });
        }
        default:
            return state;
    }
}