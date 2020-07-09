import { 
    AUTH_ATTEMPTING, 
    AUTH_SUCCESS, 
    AUTH_FAILED, 
    LOGGED_OUT, 
    GET_PROFILE, 
    SIGNUP_SUCCESS,
    DELETE_MOE,
    UPDATE_MOE,
    RESET
} from '../actions/types';

const initialState = {
    attempting: false,
    isAuth: false,
    isSignUp: false,
    isUpdate: false,
    isDelete: false,
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
        return { ...state, attempting: false, isAuth: false, profile: {}, error: null }
    
    case SIGNUP_SUCCESS:
        return { ...state, attempting: false, isAuth: false, isSignUp: true, error: null }
    
    case DELETE_MOE:
        return initialState

    case UPDATE_MOE:
        return { ...state, isUpdate: true}    
    
    case GET_PROFILE:
        return { ...state, profile: action.payload}
    
    case RESET:
        return { ...state, isUpdate: false }

    default:
        return state
    }
}
