import { AUTH_ATTEMPTING, AUTH_SUCCESS, AUTH_FAILED, LOGGED_OUT } from '../actions/types';

const initialState = {
    attempting: false,
    isAuth: false,
    profile: {},
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {

    case AUTH_ATTEMPTING:
        return { ...state, attempting: true, isAuth: false, error: null }

    case AUTH_SUCCESS:
        return { ...state, attempting: false, isAuth: true, error: null }

    case AUTH_FAILED:
        return { ...state, attempting: false, isAuth: false, error: action.payload }
    
    case LOGGED_OUT:
        return {...state, attempting: false, isAuth: false, profile: {}, error: null }
    
    default:
        return state
    }
}
