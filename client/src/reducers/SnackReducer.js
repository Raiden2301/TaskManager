import { store } from '../store';

export const snackReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUCCESS': {
            return Object.assign({}, state, { snack: { open: true, severity: 'success', message: action.message } });
        }
        case 'FAILURE': {
            return Object.assign({}, state, { snack: { open: true, severity: 'error', message: action.message } });
        }
        case 'CLOSE_SNACK': {
            return Object.assign({}, state, { snack: { open: false } });
        }
        default:
            return state;
    }
}