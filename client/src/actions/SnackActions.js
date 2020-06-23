export const callSnack = (type = 'SUCCESS', message) => ({
    type: type,
    message: message
})

export const closeSnack = (type = 'CLOSE_SNACK') => ({
    type: type
})