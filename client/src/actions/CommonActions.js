export const gotData = (data, type = 'GOT_DATA') => ({
    data: data,
    type: type
})

export const getData = (params = {}, type = 'GET_DATA', gotType = 'GOT_DATA') => ({
    params: params,
    gotType: gotType,
    type: type
})

export const getDataById = (type = 'GET_DATA_BY_ID', id) => ({
    type: type,
    id: id
})

export const deleteById = (type = 'GET_DATA_BY_ID', id) => ({
    type: type,
    id: id
})

export const onSave = (type = 'SAVE', data, neededId = -1) => ({
    type: type,
    data: data,
    neededId: neededId
})

export const initializeLogin = (type = "INITIALIZE_LOGIN") => ({
    type: type
})

export const logIn = (type = "LOG_IN", loginData) => ({
    type: type,
    loginData: loginData
})

export const logOut = (type = "LOG_OUT") => ({
    type: type
})
