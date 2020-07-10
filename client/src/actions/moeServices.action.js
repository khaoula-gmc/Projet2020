import {
    ADD_SERVICE,
    DELETE_SERVICE,
    UPDATE_SERVICE,
    GET_MOE_SERVICE_SUCCESS,
    GET_MOE_SERVICE_FAILED,
    GETTING_MOE_SERVICE,
    CLEAR_SERVICE
  } from './types';
import { addError, clearErrors} from './error.action';

import {
    apiAddService,
    apiUpdateService,
    apiDeleteService,
    apiGetService
} from '../api/moeServices.api';
  
  export const addService = moeService => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        await apiAddService(moeService);
        dispatch({ type: ADD_SERVICE });
        const { data: {service} } = await apiGetService(moeService);
        dispatch({ type: GET_MOE_SERVICE_SUCCESS, payload: service });
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const updateService = service => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        await apiUpdateService(service);
        dispatch({ type: UPDATE_SERVICE });
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const getService = service => {
    return async dispatch => {
      try {
        dispatch({ type: GETTING_MOE_SERVICE });
        const { data: {services} } = await apiGetService(service);
        dispatch({ type: GET_MOE_SERVICE_SUCCESS, payload: services });
      } catch (err) {
        dispatch({ type: GET_MOE_SERVICE_FAILED });
        dispatch(addError(err));
      }
    };
  };
  
  export const deleteService = _id => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        dispatch({ type: DELETE_SERVICE })
        await apiDeleteService(_id);
        dispatch(getService())
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const clearService = () => ({ type: CLEAR_SERVICE });