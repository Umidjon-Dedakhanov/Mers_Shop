import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import resetPwdReducer from "./resetPwdReducer";

const rootReducers = combineReducers({
  authReducer: authReducer,
  cart: cartReducer,
  order: orderReducer,
  resetPwd: resetPwdReducer
});

export default rootReducers;
