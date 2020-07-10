import {
    ADD_PRODUIT,
    DELETE_PRODUIT,
    UPDATE_PRODUIT,
    GET_MOE_PRODUIT_SUCCESS,
    GET_MOE_PRODUIT_FAILED,
    GETTING_MOE_PRODUIT,
    CLEAR_PRODUIT
} from '../actions/types'

const initialState = {
    isAdd: false,
    isGeting: false,
    isDelete: false,
    isUpdate: false,
    moeProduits: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_MOE_PRODUIT_SUCCESS:
            return { ...state, isGeting: false, moeProduits: action.payload }
        
        case GET_MOE_PRODUIT_FAILED:
            return { ...state, isGeting: false }

        case GETTING_MOE_PRODUIT:
            return { ...state, isGeting: true }

        case ADD_PRODUIT:
            return { ...state, isAdd: true }
        
        case UPDATE_PRODUIT:
            return { ...state, isUpdate: true }
        
        case DELETE_PRODUIT:
            return { ...state, isDelete: true }
        
        case CLEAR_PRODUIT:
            return { ...state, isDelete: false, isUpdate: false, isAdd: false }

    default:
        return state
    }
}
