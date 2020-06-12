import Axios from 'axios';
import { store } from '../store';
import history from '../history';

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INITIALIZE_LOGIN': {
            return Object.assign({}, state, { loggedIn: false });
        }
        case 'LOG_IN': {
            // localStorage.setItem('loggedIn', action.status)
            Axios.post('http://localhost:8081/employees/loginEmployee/', action.loginData)
                .then((response) => {
                    if (response.data !== '') {
                        console.log("Asta e response", response.data)
                        localStorage.setItem('loggedIn', true)
                        localStorage.setItem('loggedUserId', response.data.id)
                        history.push('/')
                        return state
                    } else {
                        localStorage.setItem('loggedIn', false)
                        history.push('/login')
                        alert("Wrong username or password!")
                        return state
                    }
                })
                .catch((error) => {
                    alert("Something went wrong")
                    localStorage.setItem('loggedIn', false)
                    history.push('/login');
                    console.log(error)
                })
            return state
        }
        case 'LOG_OUT': {
            localStorage.setItem('loggedIn', false)
            history.push('/login')
            return state
        }
        default:
            return state;
    }
}