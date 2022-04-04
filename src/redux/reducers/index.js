import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
  authReducer: authReducer,
});

export default rootReducers;
