import {combineReducers} from 'redux';
import date from './date';
import rover from './rover';

/**
 * @param {Object} [state=initialState] 
 * @param {Object} action 
 * @returns {Object}
 */
const photosApp = combineReducers({
  date,
  rover
});

export default photosApp;
