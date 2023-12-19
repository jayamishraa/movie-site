import { combineReducers } from "@reduxjs/toolkit";
import initialReducer from "./initialReducer";
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    initialReducer, 
    movieReducer
})

export default rootReducer