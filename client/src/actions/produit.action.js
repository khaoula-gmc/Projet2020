import {GET_ALL_PRODUITS_SUCCESS, GET_ALL_PRODUITS_FAILED, GET_ALL_PRODUITS_ATTEMPTING} from './types'
import {apiGetAllProduits} from '../api/produit.api'

export const getAllProduits = () => {
    return async dispatch => {  
        dispatch({ type: GET_ALL_PRODUITS_ATTEMPTING })
        try {
            const {data: {produits}} = await apiGetAllProduits()
            dispatch({ type: GET_ALL_PRODUITS_SUCCESS, payload: produits })
        } catch (err) {
            dispatch({ type: GET_ALL_PRODUITS_FAILED })
        }
    }
}


