import {
    GET_POSTS_BY_REQUEST,
    GET_POSTS_BY_SUCCESS,
    GET_POSTS_BY_FAIL,
    SEARCH_QUERY_REQUEST,
    SEARCH_QUERY_SUCCESS,
    SEARCH_QUERY_FAIL,
    SEARCH_QUERY_TEXT
} from '../constants/constants'

const initialState = {
    country: {
        isLoading: null,
        error: null,
        data: null,
        searchData: null
    },
    searchUrl: ''
};

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_BY_REQUEST:
            return {
                ...state,
                country: {
                    isLoading: true,
                    error: null,
                    data: null,
                    searchData: null
                }
            }
        case GET_POSTS_BY_SUCCESS:
            return {
                ...state,
                country: {
                    isLoading: false,
                    error: false,
                    data: action.payload,
                    searchData: false
                },
            }
        case GET_POSTS_BY_FAIL:
            return {
                ...state,
                country: {
                    isLoading: false,
                    error: action.payload,
                    data: false,
                    searchData: false
                }
            }
        case SEARCH_QUERY_REQUEST:
            return {
                ...state,
                country: {
                    isLoading: true,
                    error: null,
                    data: null,
                    searchData: null
                }
            }
        case SEARCH_QUERY_SUCCESS:
            return {
                ...state,
                country: {
                    isLoading: false,
                    error: false,
                    data: action.payload,
                    searchData: false
                }
            }
        case SEARCH_QUERY_FAIL:
            return {
                ...state,
                country: {
                    isLoading: false,
                    error: action.payload,
                    data: true,
                    searchData: false
                }
            }
        case SEARCH_QUERY_TEXT:
            return{
                ...state,
                searchUrl: action.payload
            }
        default:
            return state;
    }
}

export default countryReducer;