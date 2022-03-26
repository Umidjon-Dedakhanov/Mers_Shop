const SET_USER_DATA = "/auth/SET_USER_DATA";

let initialState = {
  userName: "uyi",
  password: "",
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...(state.userName = action.userName) };
    default:
      return state;
  }
};
export const setAuthAC = (userName) => ({
  type: SET_USER_DATA,
  userName,
});
