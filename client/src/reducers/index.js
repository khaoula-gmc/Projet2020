import {combineReducers} from 'redux';

import auth from '../reducers/auth.reducer'
import moes from '../reducers/moe.reducer'

export default combineReducers({
    auth, moes
});