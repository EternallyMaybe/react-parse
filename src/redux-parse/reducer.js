const initialState = {
    name: ''
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'RENAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    } 
}

export default reducer;