import Axios from 'axios';
import { gotData } from '../actions/CommonActions';
import { store } from '../store';

export const employeeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEES': {
            let url = 'http://localhost:8081/employees/getEmployees/';
            Axios.get(url)
                .then((response) => {
                    store.dispatch(gotData(response.data, 'GOT_EMPLOYEES'));
                    console.log("data: ", response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            return state;
        }
        case 'GOT_EMPLOYEES': {
            return Object.assign({}, state, { employees: action.data });
        }
        case 'GET_EMPLOYEE_BY_ID': {
            let id = action.id;
            let url = `http://localhost:8081/employees/getEmployee/${id}/`;
            Axios.get(url)
                .then((response) => {
                    store.dispatch(gotData(response.data, 'GOT_EMPLOYEE_BY_ID'));
                })
                .catch((error) => {
                    console.log(error);
                });
            return state;
        }
        case 'GOT_EMPLOYEE_BY_ID': {
            return Object.assign({}, state, { loggedEmployee: action.data });
        }
        case 'SAVE_EMPLOYEE': {
            let data = action.data
            Axios.post('http://localhost:8081/employees/save/', data)
                .then((response) => {
                    alert("Saved!")
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