import {SET_ROVER} from '../actions';

/**
 * @param {String} [state='curiosity'] 
 * @param {Object} action 
 * @returns {Object}
 */
const rover = (state = ['curiosity'], action) => {
  switch (action.type) {
    case SET_ROVER:
      return [action.rover];
    default:
      return state;
  }
};

export default rover;
