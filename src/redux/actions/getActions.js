import authApiInstance from '../../api/authApi';
import { FETCHING_DATA, FETCHED_DATA, FETCHING_FAIL} from './types';

function fetchedData(data, message){
    return {
        type: FETCHED_DATA,
        payload: {
            data,
            message
        }
    }
}

function fetchingData(message){
    return {
        type: FETCHING_DATA,
        payload: message
    }
}

function fetchingFail(message){
    return {
        type: FETCHING_FAIL,
        payload: message
    }
}

export const fetchData = (API_CONFIG) => dispatch => {
        dispatch(fetchingData({message: "Fetching data!"}));
        function getTheData (API_CONFIG){
            authApiInstance.get(API_CONFIG.endpoint, { signal:  API_CONFIG.abortionRequest.signal}, 
                {
                    params: API_CONFIG?.params
                }
            )
            .then(response => {
                dispatch(fetchedData({data: response.data}, response.data.message || "Successfully fetched!"))
            })
            .catch(err => {
                dispatch(fetchingFail(err?.response.data.message || "Something went wrong!"))
            })
        }
        getTheData(API_CONFIG)
}