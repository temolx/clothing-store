export const addToFaves = (data) => {
    return {
        type: 'ADD_FAV',
        payload: data
    }
}

export const removeFave = (id) => {
    return {
        type: 'REMOVE_FAV',
        payload: id
    }
}