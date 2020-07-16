import {
    ADD_TYPE_SERVICE,
    DELETE_TYPE_SERVICE,
    GET_TYPE_SERVICE_SUCCESS,
    GET_TYPE_SERVICE_FAILED,
    GETTING_TYPE_SERVICE,
    CLEAR_TYPE_SERVICE
} from '../actions/types'

const initialState = {
    isAdd: false,
    isGeting: false,
    isDelete: false,
    typesServices: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_TYPE_SERVICE_SUCCESS:
            return { ...state, isGeting: false, typesServices: action.payload }
        
        case GET_TYPE_SERVICE_FAILED:
            return { ...state, isGeting: false }

        case GETTING_TYPE_SERVICE:
            return { ...state, isGeting: true }

        case ADD_TYPE_SERVICE:
            return { ...state, isAdd: true }
        
        case DELETE_TYPE_SERVICE:
            return { ...state, isDelete: true }
        
        case CLEAR_TYPE_SERVICE:
            return { ...state, isDelete: false, isAdd: false, isGetting: false }

    default:
        return state
    }
}
