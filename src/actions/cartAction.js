export const addToCart = (data) => {
    return {
        type: 'ADD',
        payload: data
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE',
        payload: id
    }
}