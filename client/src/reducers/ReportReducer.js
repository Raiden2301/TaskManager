import Axios from 'axios';

export const reportReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEND_REPORT': {
            let data = action.data
            Axios.post('http://localhost:8081/report/send/', data)
                .then((response) => {
                    alert("Your report has been sent to the admin!")
                })
                .catch((error) => {
                    alert("Something went wrong while processing your request")
                    console.log(error)
                })
            return state;
        }
        default:
            return state;
    }
}