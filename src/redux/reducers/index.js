import { combineReducers } from "redux";
import authReducer from "./authReducer";
import getReducer from "./getReducers";

const rootReducers = combineReducers({
  authReducer: authReducer,
  getReducer: getReducer
});

export default rootReducers;
