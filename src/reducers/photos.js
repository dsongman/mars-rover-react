import {REQUEST_PHOTOS, RECEIVE_PHOTOS} from '../actions';

const defaultRoverState = {
  isFetching: false
};

/**
 * @param {String} [state=defaultRoverState] 
 * @param {Object} action 
 * @returns {Object}
 */
const photos = (state = defaultRoverState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PHOTOS:
      var key = action.rover + '-' + action.date;
      return Object.assign({}, state, {
        isFetching: false,
        [key]: action.json.photos
      });
    default:
      return state;
  }
};

export default photos;
