const initialState = {
    babyList : []
}

const BabyListReducer = (state=initialState,action) => {
    switch (action.type) {
        case "SET_BABY_LIST":
            return {...state, babyList:action.payload};
        default:
            return state;
    }
};

export default BabyListReducer;