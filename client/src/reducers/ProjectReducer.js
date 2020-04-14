import Axios from 'axios';
import { gotData } from '../actions/CommonActions';
import { store } from '../store';

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
        case 'SAVE_PROJECT': {
            console.log(action)
            let data = action.data
            Axios.post('http://localhost:8081/projects/save/', data)
                .then((response) => {
                    alert("Project was saved")
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