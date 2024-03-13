import CurrentIndex from "./reducers/currentNameIndexReducer";
import {configureStore} from "@reduxjs/toolkit";
import BabyListReducer from "./reducers/babyListReducer";
import {postNameReducer} from "./reducers/postNameReducer";
import {CurrentSlugReducer} from "./reducers/currentSlugReducer";


const rootReducer = {
    currentIndex: CurrentIndex,
    babyList: BabyListReducer,
    post_name: postNameReducer,
    currentSlug: CurrentSlugReducer
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;