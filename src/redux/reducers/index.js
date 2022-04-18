import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const rootReducers = combineReducers({
  authReducer: authReducer,
  cart: cartReducer,
  order: orderReducer
});

export default rootReducers;
