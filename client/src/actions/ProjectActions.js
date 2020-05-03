export const editProject = (type = 'EDIT_PROJECT', id) => ({
    type: type,
    id: id
})

export const getProjectById = (type = 'GET_PROJECT_BY_ID', id) => ({
    type: type,
    id: id
})

export const deleteProjectById = (type = 'DELETE_PROJECT_BY_ID', id) => ({
    type: type,
    id: id
})