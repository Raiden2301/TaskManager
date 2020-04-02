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
        default:
            return state;
    }
}