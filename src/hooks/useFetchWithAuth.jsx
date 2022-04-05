import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useFetchWithAuth = (stateProps, endpoint, params) => {
    const data = useSelector(state => state.getReducer);
    useEffect(() => {
        const abortionRequest = new AbortController();
        stateProps.fetchData({
            endpoint: endpoint,
            params: params,
            abortionRequest
        })
        return () => abortionRequest.abort()
    }, [stateProps, endpoint, params])
    return { data }
}

export default useFetchWithAuth
