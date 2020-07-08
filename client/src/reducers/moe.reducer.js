import { GET_ALL_MOE_SUCCESS, GET_ALL_MOE_FAILED, GET_ALL_MOE_ATTEMPTING } from "../actions/types"

const initialState = {
    attempting: false,
    moes: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_MOE_ATTEMPTING:
            return { ...state, attempting: true }

        case GET_ALL_MOE_SUCCESS:
            return { ...state, attempting: false, moes: action.payload }

        case GET_ALL_MOE_FAILED:
            return {...state, attempting: false}
    
        default:
            return state
    }
}
