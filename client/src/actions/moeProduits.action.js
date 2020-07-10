import {
    ADD_PRODUIT,
    DELETE_PRODUIT,
    UPDATE_PRODUIT,
    GET_MOE_PRODUIT_SUCCESS,
    GET_MOE_PRODUIT_FAILED,
    GETTING_MOE_PRODUIT,
    CLEAR_PRODUIT
  } from './types';
import { addError, clearErrors} from './error.action';

import {
    apiAddProduit,
    apiUpdateProduit,
    apiDeleteProduit,
    apiGetProduit
} from '../api/moeProduits.api';
  
  export const addProduit = produit => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        await apiAddProduit(produit);
        dispatch({ type: ADD_PRODUIT });
        const { data: {moeProduits} } = await apiGetProduit(produit);
        dispatch({ type: GET_MOE_PRODUIT_SUCCESS, payload: moeProduits });
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const updateProduit = produit => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        await apiUpdateProduit(produit);
        dispatch({ type: UPDATE_PRODUIT });
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const getProduit = produit => {
    return async dispatch => {
      try {
        dispatch({ type: GETTING_MOE_PRODUIT });
        const { data: {moeProduits} } = await apiGetProduit(produit);
        dispatch({ type: GET_MOE_PRODUIT_SUCCESS, payload: moeProduits });
      } catch (err) {
        dispatch({ type: GET_MOE_PRODUIT_FAILED });
        dispatch(addError(err));
      }
    };
  };
  
  export const deleteProduit = _id => {
    return async dispatch => {
      try {
        dispatch(clearErrors());
        dispatch({ type: DELETE_PRODUIT })
        await apiDeleteProduit(_id);
      } catch (err) {
        dispatch(addError(err));
      }
    };
  };
  
  export const clearProduit = () => ({ type: CLEAR_PRODUIT });