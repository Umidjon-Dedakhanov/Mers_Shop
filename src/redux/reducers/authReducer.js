import { AUTH_USER } from "../actions/types";

const inititalState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  message: null,
  error: null,
};

const authReducer = (state = inititalState, action) => {
  const { type } = action;
  switch (type) {
    case AUTH_USER:
      return state; //structure start
    default:
      return state;
  }
};

export default authReducer;
