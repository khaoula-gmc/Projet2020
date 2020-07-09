import { 
    GET_ALL_SERVICES_SUCCESS, 
    GET_ALL_SERVICES_FAILED, 
    GET_ALL_SERVICES_ATTEMPTING,
} from "../actions/types"

const initialState = {
    attempting: false,
    services: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_SERVICES_ATTEMPTING:
            return { ...state, attempting: true }

        case GET_ALL_SERVICES_SUCCESS:
            return { ...state, attempting: true, services: action.payload }

        case GET_ALL_SERVICES_FAILED:
            return {...state, attempting: false}
    
        default:
            return state
    }
}
