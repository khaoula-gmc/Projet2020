import { GET_ALL_MOE_SUCCESS, GET_ALL_MOE_FAILED } from "../actions/types"

const initialState = {
    moes: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {

    case GET_ALL_MOE_SUCCESS:
        return { ...state, moes: action.payload, error: null }

    case GET_ALL_MOE_FAILED:
        return {...state, error: action.payload}
    
    default:
        return state
    }
}
