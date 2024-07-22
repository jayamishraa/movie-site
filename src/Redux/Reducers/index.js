import { combineReducers } from "@reduxjs/toolkit";
import initialReducer from "./initialReducer.js";
import movieReducer from "./movieReducer.js";

const rootReducer = combineReducers({
    initialReducer, 
    movieReducer
})

export default rootReducer