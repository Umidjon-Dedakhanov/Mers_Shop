import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import currencyReducer from "./currencyReducer";
import likeReducer from "./likeReducer";
import orderReducer from "./orderReducer";
import resetPwdReducer from "./resetPwdReducer";
import langReducer from "./langReducer";

const rootReducers = combineReducers({
  authReducer: authReducer,
  cart: cartReducer,
  liked: likeReducer,
  order: orderReducer,
  resetPwd: resetPwdReducer,
  categories: categoryReducer,
  currency: currencyReducer,
  lang: langReducer
});

export default rootReducers;
