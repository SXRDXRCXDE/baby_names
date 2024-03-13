const initialState = {
    post_name : ''
}

export const postNameReducer = (state= initialState,action) => {
    switch (action.type) {
        case "SET_POST_NAME":
            return {...state , post_name: action.payload};
        default:
            return state;
    }
}