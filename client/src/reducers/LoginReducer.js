import { store } from '../store';
import history from '../history';

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INITIALIZE_LOGIN': {
            return Object.assign({}, state, { loggedIn: false });
        }
        case 'UPDATE_LOGIN': {
            console.log("am intrat aici")
            localStorage.setItem('loggedIn', action.status)
            history.push('/');
            return Object.assign({}, state, { loggedIn: localStorage.getItem('loggedIn') });
        }
        default:
            return state;
    }
}