import { ADD_ERROR, CLEAR_ERRORS } from '../actions/types'

export const addError = err => {
    const {
        response: { data }
    } = err

    return { type: ADD_ERROR, payload: data.error }
}

export const clearErrors = err => {
    return { type: CLEAR_ERRORS }
}


