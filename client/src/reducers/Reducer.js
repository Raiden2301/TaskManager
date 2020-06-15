import { combineReducers } from 'redux';
import { employeeReducer } from './EmployeeReducer';
import { taskReducer } from './TaskReducer';
import { projectReducer } from './ProjectReducer';
import { loginReducer } from './LoginReducer';
import { reportReducer } from './ReportReducer';

export default combineReducers({
    employeeObj: employeeReducer,
    taskObj: taskReducer,
    projectObj: projectReducer,
    loginObj: loginReducer,
    reportObj: reportReducer
})