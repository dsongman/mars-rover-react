import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunkMiddleware);

/**
 * 
 * 
 * @param {Object} preloadedState
 * @returns {Store}
 */
export default (preloadedState) => {
  return createStore(
    rootReducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
};
