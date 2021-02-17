import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

export default (rootReducer) => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
  );
  return store;
};
