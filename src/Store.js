import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkNiddleware from 'redux-thunk';

export default (rootReducer) => {
  const store = createStore(rootReducer, applyMiddleware(thunkNiddleware, logger));
  return store
}
