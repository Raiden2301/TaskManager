import { combineReducers } from 'redux';
import { employeeReducer } from './EmployeeReducer';
import { taskReducer } from './TaskReducer';
import { projectReducer } from './ProjectReducer';

export default combineReducers({
    employeeObj: employeeReducer,
    taskObj: taskReducer,
    projectObj: projectReducer
})