import {
    ADD_ACTIVITE_MOE,
    DELETE_ACTIVITE_MOE,
    GET_ACTIVITE_MOE_SUCCESS,
    GET_ACTIVITE_MOE_FAILED,
    GETTING_ACTIVITE_MOE,
    CLEAR_ACTIVITE_MOE
} from '../actions/types'

const initialState = {
    isAdd: false,
    isGeting: false,
    isDelete: false,
    activitesMoe: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ACTIVITE_MOE_SUCCESS:
            return { ...state, isGeting: false, activitesMoe: action.payload }
        
        case GET_ACTIVITE_MOE_FAILED:
            return { ...state, isGeting: false }

        case GETTING_ACTIVITE_MOE:
            return { ...state, isGeting: true }

        case ADD_ACTIVITE_MOE:
            return { ...state, isAdd: true }
        
        case DELETE_ACTIVITE_MOE:
            return { ...state, isDelete: true }
        
        case CLEAR_ACTIVITE_MOE:
            return { ...state, isDelete: false, isAdd: false, isGetting: false }

    default:
        return state
    }
}
