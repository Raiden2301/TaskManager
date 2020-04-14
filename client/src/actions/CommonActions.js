export const gotData = (data, type = 'GOT_DATA') => ({
    data: data,
    type: type
})

export const getData = (params = {}, type = 'GET_DATA', gotType = 'GOT_DATA') => ({
    params: params,
    gotType: gotType,
    type: type
})

export const onSave = (type = 'SAVE', data) => ({
    type: type,
    data: data
})
