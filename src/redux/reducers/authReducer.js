import { AUTH_USER } from "../actions/types";

const inititalState = {
    user: null,
    isAuthenticated: false,
    message: null,
    error: null
}


const authReducer = (state = inititalState, action) => {
    const {type, payload} = action;
    switch(type){
        case AUTH_USER:
            localStorage.setItem("access-token", payload?.accessToken)
            localStorage.setItem("refresh-token", payload?.refreshToken)
            return {
                user: payload?.user,
                isAuthenticated: true,
                message: payload?.message,
                error: false
            }
        default: 
            return state
    }
}

export default authReducer;