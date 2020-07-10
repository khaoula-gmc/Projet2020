import {
    ADD_SERVICE,
    DELETE_SERVICE,
    UPDATE_SERVICE,
    GET_MOE_SERVICE_SUCCESS,
    GET_MOE_SERVICE_FAILED,
    GETTING_MOE_SERVICE,
    CLEAR_SERVICE
} from '../actions/types'

const initialState = {
    isAdd: false,
    isGeting: false,
    isDelete: false,
    isUpdate: false,
    moeServices: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_MOE_SERVICE_SUCCESS:
            return { ...state, isGeting: false, moeServices: action.payload }
        
        case GET_MOE_SERVICE_FAILED:
            return { ...state, isGeting: false }

        case GETTING_MOE_SERVICE:
            return { ...state, isGeting: true }

        case ADD_SERVICE:
            return { ...state, isAdd: true }
        
        case UPDATE_SERVICE:
            return { ...state, isUpdate: true }
        
        case DELETE_SERVICE:
            return { ...state, isDelete: true }
        
        case CLEAR_SERVICE:
            return { ...state, isDelete: false, isUpdate: false, isAdd: false }

    default:
        return state
    }
}
