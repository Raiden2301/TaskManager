export const getEmployeeById = (type = 'GET_EMPLOYEE_BY_ID', id) => ({
    type: type,
    id: id
})

export const getAllEmployees = (type = 'GET_EMPLOYEES') => ({
    type: type
})