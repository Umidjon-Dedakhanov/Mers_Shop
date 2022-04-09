import { createStore, applyMiddleware } from "redux";
import rootReducers from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
