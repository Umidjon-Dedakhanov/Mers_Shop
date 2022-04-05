import { AUTH_FAIL, AUTH_USER, AUTH_LOADING } from "../actions/types";

const inititalState = {
  user: null,
  isAuthenticated: false,
  message: null,
  error: null,
  code: null,
  loading: false,
};

const authReducer = (state = inititalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      localStorage.setItem("access-token", payload?.accessToken);
      localStorage.setItem("refresh-token", payload?.refreshToken);
      return {
        user: payload?.user,
        isAuthenticated: true,
        message: payload?.message,
        error: false,
        code: payload?.code,
        loading: false,
      };
    case AUTH_FAIL:
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      return {
        user: null,
        isAuthenticated: false,
        message: payload?.message,
        error: true,
        code: payload?.code,
        loading: false,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
