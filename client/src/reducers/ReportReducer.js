import Axios from 'axios';
import { store } from '../store';
import { callSnack } from '../actions/SnackActions'

export const reportReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEND_REPORT': {
            let data = action.data
            Axios.post('http://localhost:8081/report/send/', data)
                .then((response) => {
                    store.dispatch(callSnack('SUCCESS', 'Your report has been sent to the admin!'));
                })
                .catch((error) => {
                    alert("Something went wrong while processing your request")
                    store.dispatch(callSnack('FAILURE', 'Something went wrong while processing your request!'));
                    console.log(error)
                })
            return state;
        }
        default:
            return state;
    }
}