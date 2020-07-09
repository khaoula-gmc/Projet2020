import {
    GET_ALL_SERVICES_SUCCESS,
    GET_ALL_SERVICES_FAILED, 
    GET_ALL_SERVICES_ATTEMPTING
} from './types'
import {apiGetAllServices} from '../api/service.api'

export const getAllServices = () => {
    return async dispatch => {  
        dispatch({ type: GET_ALL_SERVICES_ATTEMPTING })
        try {
            const {data: { services }} = await apiGetAllServices()
            dispatch({ type: GET_ALL_SERVICES_SUCCESS, payload: services })
        } catch (err) {
            dispatch({ type: GET_ALL_SERVICES_FAILED })
        }
    }
}


