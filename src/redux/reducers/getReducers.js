import { FETCHED_DATA, FETCHING_DATA, FETCHING_FAIL } from "../actions/types";

const inititalState = {
    data: [],
    message: '',
    loading: false,
}

const getReducer = (state = inititalState, action) => {
    const {type, payload} = action;
    switch(type){
        case FETCHED_DATA:
            return {
                data: payload.data,
                message: payload.message,
                loading: false,
            }
        case FETCHING_DATA: 
            return {
                ...state,
                message: payload.message,
                loading: true
        }
        case FETCHING_FAIL:
            return {
                data: [],
                message: payload.message,
                loading: false
            }
        default: 
            return state
    }
}

export default getReducer;