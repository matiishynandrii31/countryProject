import {
    GET_POSTS_BY_ID_REQUEST,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_FAIL
} from '../constants/constants'

const initialState = {
    country: {
        isLoading: null,
        error: null,
        data: null
    }
};

const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS_BY_ID_REQUEST:
            return {
                ...state,
                country: {
                    isLoading: true,
                    error: null,
                    data: null
                }
            }
        case GET_POSTS_BY_ID_SUCCESS:
            return {
                ...state,
                country: {
                    isLoading: false,
                    error: false,
                    data: action.payload
                },
            }
        case GET_POSTS_BY_ID_FAIL:
            return {
                ...state,
                country: {
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        default: return state;        
    }
}

export default countryReducer;