import Axios from 'axios';
import { gotData, getDataById } from '../actions/CommonActions';
import { store } from '../store';

const loggedUserId = localStorage.getItem('loggedUserId')

export const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_TODO': {
            let data = action.data
            Axios.post('http://localhost:8081/todo/save/', data)
                .then((response) => {
                    store.dispatch(getDataById('GET_EMPLOYEE_BY_ID', loggedUserId));
                })
                .catch((error) => {
                    alert("Something went wrong")
                    console.log(error)
                })
            return state;
        }
        case 'DELETE_TODO_BY_ID': {
            let id = action.id;
            let url = `http://localhost:8081/todo/delete/${id}/`;
            Axios.delete(url)
                .then((response) => {
                    store.dispatch(getDataById('GET_EMPLOYEE_BY_ID', loggedUserId));
                })
                .catch((error) => {
                    alert("Something went wrong")
                    console.log(error);
                });
            return state;
        }
        default:
            return state;
    }
}