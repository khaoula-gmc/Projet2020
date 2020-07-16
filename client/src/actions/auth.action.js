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
} from './types'
import { apiLogin, getProfile, apiSignUp, apiDelete, apiUpdate } from '../api/moe.api'
import setAuthHeader from '../api/setAuthHeader.api'

const TOKEN_NAME = 'moe_app_token'

const success = (token) => {
    localStorage.setItem(TOKEN_NAME, token)
    return { type: AUTH_SUCCESS };
}

const error = (err) => {
    return { type: AUTH_FAILED, payload: err };
}

export const signUp = request_data => {
    return async dispatch => {
      try {
        await apiSignUp(request_data);
        dispatch({ type: SIGNUP_SUCCESS });
      } catch (err) {
        const {
          response: { data },
        } = err;
        dispatch(error(data.error));
      }
    };
  };
export const signIn = request_data => {
    return async dispatch => {
        dispatch({ type: AUTH_ATTEMPTING });
        try {
            const { data: { token } } = await apiLogin(request_data)
            setAuthHeader(token)
            dispatch(tokenProfile())
            dispatch(success(token))
        } catch (err) {
            const { response: { data }} = err
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
            dispatch(tokenProfile())
            dispatch(success(token));
        } catch (err) {
            console.log(err);
        }
    }
}

export const loggedOut = () => {
    localStorage.clear();
    setAuthHeader(null);
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

export const deleteMoe = (_id) => {
    return async dispatch => {
        try {
            dispatch({ type: DELETE_MOE })
            await apiDelete(_id)
            dispatch(loggedOut())
        } catch (err) {
            console.log(err);
        }
      };
}

export const updateMoe = (moe) => {
    return async dispatch => {
        try {
          await apiUpdate(moe)
          dispatch({ type: UPDATE_MOE })
          dispatch(tokenProfile())
        } catch (err) {
          console.log(err);
        }
      };
}

export const reset = () => {
    return ({ type: RESET })
}

