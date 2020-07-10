import {combineReducers} from 'redux';

import auth from '../reducers/auth.reducer'
import moes from '../reducers/moe.reducer'
import errors from '../reducers/errors.reducer'
import produits from '../reducers/produits.reducer'
import services from '../reducers/services.reducer'
import moeProduits from '../reducers/moeProduit.reducer'
import moeServices from '../reducers/moeService.reducer'

export default combineReducers({
    auth,
    moes, 
    errors, 
    produits, 
    services, 
    moeProduits, 
    moeServices
});