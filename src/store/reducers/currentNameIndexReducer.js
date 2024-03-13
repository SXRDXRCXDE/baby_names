const initialState = {
    currentIndex: 0,
};

const CurrentIndex = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_INDEX":
            return { ...state, currentIndex: action.payload};
        default:
            return state;
    }
};
export default CurrentIndex;