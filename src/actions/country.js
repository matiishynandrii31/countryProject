import {
    GET_POSTS_BY_ID_REQUEST,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_FAIL
} from '../constants/constants';

const getCountry = (dispatch) => {
    dispatch({type: GET_POSTS_BY_ID_REQUEST});
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                dispatch({type: GET_POSTS_BY_ID_FAIL, payload: res.error});
            }
            dispatch({type: GET_POSTS_BY_ID_SUCCESS, payload: res});
         })
         .catch(error => {
             dispatch({type: GET_POSTS_BY_ID_FAIL, payload: error});
         })
         
};

export const getCountryFunc = dispatch => {
    return() => getCountry(dispatch);
}