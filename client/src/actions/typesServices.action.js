import {
  ADD_TYPE_SERVICE,
  DELETE_TYPE_SERVICE,
  GET_TYPE_SERVICE_SUCCESS,
  GET_TYPE_SERVICE_FAILED,
  GETTING_TYPE_SERVICE,
  CLEAR_TYPE_SERVICE
} from '../actions/types'

import { addError, clearErrors} from './error.action';

import {
    apiAddTypeService,
    apiDeleteTypeService,
    apiGetTypeService
} from '../api/typesServices.api';
  
  export const addTypeService = type => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        await apiAddTypeService(type);
        dispatch({ type: ADD_TYPE_SERVICE});
        dispatch(getTypeService())
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const getTypeService = type => {
    return async dispatch => {
      try {
        dispatch({ type: GETTING_TYPE_SERVICE });
        const { data: {typesServices} } = await apiGetTypeService(type);
        dispatch({ type: GET_TYPE_SERVICE_SUCCESS, payload: typesServices });
      } catch (err) {
        dispatch({ type: GET_TYPE_SERVICE_FAILED });
        dispatch(addError(err));
      }
    };
  };
  
  export const deleteTypeService = _id => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        dispatch({ type: DELETE_TYPE_SERVICE })
        await apiDeleteTypeService(_id);
        dispatch(getTypeService())
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const clearTypeService = () => ({ type: CLEAR_TYPE_SERVICE });