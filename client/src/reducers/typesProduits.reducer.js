import {
    ADD_TYPE_PRODUIT,
    DELETE_TYPE_PRODUIT,
    GET_TYPE_PRODUIT_SUCCESS,
    GET_TYPE_PRODUIT_FAILED,
    GETTING_TYPE_PRODUIT,
    CLEAR_TYPE_PRODUIT
} from '../actions/types'

const initialState = {
    isAdd: false,
    isGeting: false,
    isDelete: false,
    typesProduits: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_TYPE_PRODUIT_SUCCESS:
            return { ...state, isGeting: false, typesProduits: action.payload }
        
        case GET_TYPE_PRODUIT_FAILED:
            return { ...state, isGeting: false }

        case GETTING_TYPE_PRODUIT:
            return { ...state, isGeting: true }

        case ADD_TYPE_PRODUIT:
            return { ...state, isAdd: true }
        
        case DELETE_TYPE_PRODUIT:
            return { ...state, isDelete: true }
        
        case CLEAR_TYPE_PRODUIT:
            return { ...state, isDelete: false, isAdd: false, isGetting: false }

    default:
        return state
    }
}
