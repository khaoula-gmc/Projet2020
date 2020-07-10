import { 
    GET_ALL_PRODUITS_SUCCESS, 
    GET_ALL_PRODUITS_FAILED, 
    GET_ALL_PRODUITS_ATTEMPTING,
} from "../actions/types"

const initialState = {
    attempting: false,
    produits: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUITS_ATTEMPTING:
            return { ...state, attempting: true }

        case GET_ALL_PRODUITS_SUCCESS:
            return { ...state, attempting: true, produits: action.payload }

        case GET_ALL_PRODUITS_FAILED:
            return { ...state, attempting: false }
        
        default:
            return state
    }
}
