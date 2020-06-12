export const editProject = (type = 'EDIT_PROJECT', id) => ({
    type: type,
    id: id
})

export const getProjectById = (type = 'GET_PROJECT_BY_ID', id) => ({
    type: type,
    id: id
})

export const getProjectsByEmployee = (type = 'GET_PROJECTS_BY_EMPLOYEE', employeeId) => ({
    type: type,
    employeeId: employeeId
})

export const saveProject = (type = 'SAVE_PROJECT_BY_EMPLOYEE', data, employeeId) => ({
    type: type,
    data: data,
    employeeId: employeeId
})

export const deleteProjectById = (type = 'DELETE_PROJECT_BY_ID', id) => ({
    type: type,
    id: id
})