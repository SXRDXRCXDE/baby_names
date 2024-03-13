const initialState = {
    currentSlug : ''
}

export const CurrentSlugReducer = (state=initialState,action) => {
    switch (action.type) {
        case "SET_CURRENT_SLUG":
            return {...state, currentSlug: action.payload}
        default :
            return state
    }
}