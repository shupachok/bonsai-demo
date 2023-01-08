import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
  
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());
  
    next(action);
  
    console.log('next state: ', store.getState());
  };
//const middlewears = [logger];
const middlewears = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middlewears));
export const store = createStore(rootReducer, undefined, composedEnhancers);