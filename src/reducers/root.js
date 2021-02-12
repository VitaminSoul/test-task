import { combineReducers } from 'redux';
import appReducer from './app';
import cartReducer from './shoppingCart';

export default combineReducers({
  appReducer,
  cartReducer
});