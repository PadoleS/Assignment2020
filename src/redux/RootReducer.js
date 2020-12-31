import { combineReducers } from 'redux';
import shoppingreducer from './Shopping/Shopping_reducer';
const rootReducer=combineReducers({
    shop:shoppingreducer
});

export default rootReducer;