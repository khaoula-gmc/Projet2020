import { 
    AUTH_ADMIN_ATTEMPTING, 
    AUTH_ADMIN_SUCCESS, 
    AUTH_ADMIN_FAILED,
    GET_ADMIN_PROFILE,  
    LOGGED_OUT_ADMIN, 
    RESET_ADMIN
} from '../actions/types';
import { getAdminProfile, apiAdminLogin } from '../api/admin.api'
import  setAuthHeader  from '../api/setAuthHeader.api'

const TOKEN_NAME = 'admin_token'

const success = (token) => {
    localStorage.setItem(TOKEN_NAME, token)
    return { type: AUTH_ADMIN_SUCCESS };
}

const error = (err) => {
    return { type: AUTH_ADMIN_FAILED, payload: err};
}

export const tokenAdminProfile = () => {
    return async dispatch => {
        try {
            const {data: {admin}} = await getAdminProfile()
            dispatch({ type: GET_ADMIN_PROFILE, payload: admin })
        } catch (err) {
            console.error(err)
        }
    }

}

export const signInAdmin = request_data => {
    return async dispatch => {
        dispatch({ type: AUTH_ADMIN_ATTEMPTING});
        try {
            const { data: { token } } = await apiAdminLogin(request_data)
            setAuthHeader(token)
            dispatch(tokenAdminProfile())
            dispatch(success(token))
        } catch (err) {
            const { response: { data }} = err
            dispatch(error(data.error))
        }
    }
}

export const loggedOutAdmin = () => {
    localStorage.removeItem(TOKEN_NAME);
    setAuthHeader(null);
    return ({ type: LOGGED_OUT_ADMIN })
}

export const resetAdmin = () => {
    return ({ type: RESET_ADMIN })
}
