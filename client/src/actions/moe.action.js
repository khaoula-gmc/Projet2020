import {GET_ALL_MOE_SUCCESS, GET_ALL_MOE_FAILED, GET_ALL_MOE_ATTEMPTING} from './types'
import {apiGetAllMoe} from '../api/moe.api'

export const getAllMoes = () => {
    return async dispatch => {  
        dispatch({ type: GET_ALL_MOE_ATTEMPTING })
        try {
            const {data: { getAll }} = await apiGetAllMoe()
            dispatch({ type: GET_ALL_MOE_SUCCESS, payload: getAll })
        } catch (err) {
            dispatch({ type: GET_ALL_MOE_FAILED })
        }
    }
}


