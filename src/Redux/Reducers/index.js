import { combineReducers } from "@reduxjs/toolkit";
import initialReducer from "./initialReducer";

const rootReducer = combineReducers({initialReducer})

export default rootReducer