import {
    GET_POSTS_BY_REQUEST,
    GET_POSTS_BY_SUCCESS,
    GET_POSTS_BY_FAIL,
    SEARCH_QUERY_TEXT,
    SEARCH_QUERY_REQUEST,
    SEARCH_QUERY_SUCCESS,
    SEARCH_QUERY_FAIL
} from '../constants/constants';
import {getCountryInfo} from "../api/rest";


export function searchQueryFunc(data) {
    return{ type: SEARCH_QUERY_TEXT, payload: data}
}
let getSearchingCountry = (data) => fetch(data)

const getSearchingCountryName = async (dispatch, data) => {
    dispatch({ type:  SEARCH_QUERY_REQUEST });
    try {
        const response = await getSearchingCountry(data);
        const res = await response.json();
        dispatch({ type: SEARCH_QUERY_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: SEARCH_QUERY_FAIL, payload: e });
    }
};

export const getSearchingCountryNameFunc = (dispatch, data) => {
    return (data) => getSearchingCountryName(data, dispatch);
}

const getCountry = async (dispatch) => {
    dispatch({ type: GET_POSTS_BY_REQUEST });

    try {
        const response = await getCountryInfo();
        const res = await response.json();
        dispatch({ type: GET_POSTS_BY_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GET_POSTS_BY_FAIL, payload: e });
    }
};

export const getCountryFunc = dispatch => {
    return () => getCountry(dispatch);
}