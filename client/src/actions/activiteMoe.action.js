import {
    ADD_ACTIVITE_MOE,
    DELETE_ACTIVITE_MOE,
    GET_ACTIVITE_MOE_SUCCESS,
    GET_ACTIVITE_MOE_FAILED,
    GETTING_ACTIVITE_MOE,
    CLEAR_ACTIVITE_MOE
} from '../actions/types'
import { addError, clearErrors} from './error.action';

import {
    apiAddActiviteMoe,
    apiDeleteActiviteMoe,
    apiGetActiviteMoe
} from '../api/activitesMoe.api';
  
  export const addActiviteMoe = activite => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        await apiAddActiviteMoe(activite);
        dispatch({ type: ADD_ACTIVITE_MOE });
        dispatch(getActiviteMoe())
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const getActiviteMoe = activiteMoe => {
    return async dispatch => {
      try {
        dispatch({ type: GETTING_ACTIVITE_MOE });
        const { data: {activites} } = await apiGetActiviteMoe(activiteMoe);
        dispatch({ type: GET_ACTIVITE_MOE_SUCCESS, payload: activites });
      } catch (err) {
        dispatch({ type: GET_ACTIVITE_MOE_FAILED });
        dispatch(addError(err));
      }
    };
  };
  
  export const deleteActiviteMoe = _id => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        dispatch({ type: DELETE_ACTIVITE_MOE })
        await apiDeleteActiviteMoe(_id);
        dispatch(getActiviteMoe())
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const clearActiviteMoe = () => ({ type: CLEAR_ACTIVITE_MOE });