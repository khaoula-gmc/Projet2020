import {
    ADD_TYPE_PRODUIT,
    DELETE_TYPE_PRODUIT,
    GET_TYPE_PRODUIT_SUCCESS,
    GET_TYPE_PRODUIT_FAILED,
    GETTING_TYPE_PRODUIT,
    CLEAR_TYPE_PRODUIT
} from '../actions/types'
import { addError, clearErrors} from './error.action';

import {
    apiAddTypeProduit,
    apiDeleteTypeProduit,
    apiGetTypeProduit
} from '../api/typesProduits.api';
  
  export const addTypeProduit = type => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        await apiAddTypeProduit(type);
        dispatch({ type: ADD_TYPE_PRODUIT });
        dispatch(getTypeProduit())
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
   
  export const getTypeProduit = type => {
    return async dispatch => {
      try {
        dispatch({ type: GETTING_TYPE_PRODUIT });
        const { data: {typesProduits} } = await apiGetTypeProduit(type);
        dispatch({ type: GET_TYPE_PRODUIT_SUCCESS, payload: typesProduits });
      } catch (err) {
        dispatch({ type: GET_TYPE_PRODUIT_FAILED });
        dispatch(addError(err));
      }
    };
  };
  
  export const deleteTypeProduit = _id => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        dispatch({ type: DELETE_TYPE_PRODUIT })
        await apiDeleteTypeProduit(_id);
        dispatch(getTypeProduit())
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const clearTypeProduit = () => ({ type: CLEAR_TYPE_PRODUIT });