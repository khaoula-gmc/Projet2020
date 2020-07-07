import { AUTH_ATTEMPTING, AUTH_SUCCESS, AUTH_FAILED, LOGGED_OUT, GET_PROFILE } from './types'
import { apiLogin, getProfile } from '../api/moe.api'
import setAuthHeader from '../api/setAuthHeader.api'

const TOKEN_NAME = 'moe_app_token'

const success = (token) => {
    localStorage.setItem(TOKEN_NAME, token)
    return { type: AUTH_SUCCESS};
}

const error = (err) => {
    return { type: AUTH_FAILED, payload: err};
}
export const signIn = request_data => {
    return async dispatch => {
        dispatch({ type: AUTH_ATTEMPTING});
        try {
            const { data: { token } } = await apiLogin(request_data)
            setAuthHeader(token)
            dispatch(tokenProfile())
            dispatch(success(token))
        } catch (err) {
            const { response: { data } } = err
            dispatch(error(data.error))
        }
    }
}

export const onLoading = () => {
    return dispatch => {
        try {
            const token = localStorage.getItem(TOKEN_NAME);
            if(!token) {
                return dispatch(error('Veuillez vous connecter'));
            }
            setAuthHeader(token)
            dispatch(success(token));

        } catch (err) {
            console.log(err);
        }
    }
}

export const loggedOut = () => {
    localStorage.clear();
    return ({ type: LOGGED_OUT })
}


export const tokenProfile = () => {
    return async dispatch => {
        try {
            const {data: {moe}} = await getProfile()
            dispatch({ type: GET_PROFILE, payload: moe })
        } catch (err) {
            console.error(err)
        }
    }

}