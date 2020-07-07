import {GET_ALL_MOE_SUCCESS, GET_ALL_MOE_FAILED} from './types'
import {apiGetAllMoe} from '../api/moe.api'

export const getAllMoes = () => {
    return async dispatch => {
        try {
            const {data: {moes}} = await apiGetAllMoe()
            dispatch({type: GET_ALL_MOE_SUCCESS, payload: moes })
        } catch (err) {
            console.log(err)
            // const { response: { data } } = err
            // dispatch({type: GET_ALL_MOE_FAILED, payload: data.error })
        }
    }
}


