import { 
    AUTH_ADMIN_ATTEMPTING, 
    AUTH_ADMIN_SUCCESS, 
    AUTH_ADMIN_FAILED, 
    LOGGED_OUT_ADMIN,
    GET_ADMIN_PROFILE, 
    RESET_ADMIN
} from '../actions/types';

const initialState = {
    attempting: false,
    isAuth: false,
    profileAdmin: {},
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {

    case AUTH_ADMIN_ATTEMPTING:
        return { ...state, attempting: true, isAuth: false, error: null }

    case AUTH_ADMIN_SUCCESS:
        return { ...state, attempting: false, isAuth: true, error: null }

    case AUTH_ADMIN_FAILED:
        return { ...state, attempting: false, isAuth: false, error: action.payload }

    case GET_ADMIN_PROFILE:
            return { ...state, profileAdmin: action.payload}
    
    case LOGGED_OUT_ADMIN:
        return { ...state, attempting: false, isAuth: false, profileAdmin: {}, error: null }
    
    case RESET_ADMIN:
        return initialState

    default:
        return state
    }
}
