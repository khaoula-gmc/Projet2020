import { combineReducers } from 'redux';

import auth from './auth.reducer'
import moes from './moe.reducer'
import errors from './errors.reducer'
import produits from './produits.reducer'
import services from './services.reducer'
import moeProduits from './moeProduit.reducer'
import moeServices from './moeService.reducer'
import admin from './admin.reducer'
import activitesMoe from './activitesMoe.reducer'
import typesProduits from './typesProduits.reducer'
import typesServices from './typesServices.reducer'

export default combineReducers({
    auth,
    moes, 
    errors, 
    produits, 
    services, 
    moeProduits, 
    moeServices,
    admin,
    activitesMoe,
    typesProduits,
    typesServices
});