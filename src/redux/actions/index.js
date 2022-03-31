import { AUTH_USER } from "./types"

export const authUser = (user__data) => {
    return {
        type: AUTH_USER,
        payload: user__data
    }
}