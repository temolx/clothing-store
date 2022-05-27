const favReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return [...state, action.payload];
        case 'REMOVE_FAV':
            return state.filter((element) => element.id !== action.payload)
        default:
            return state;
    }
}

export default favReducer