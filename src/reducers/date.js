import {SET_DATE} from '../actions';
import moment from 'moment';

const today = moment();

/**
 * @param {Moment} [state=moment.now()] 
 * @param {Object} action 
 * @returns {Object}
 */
const date = (state = today, action) => {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
};

export default date;
