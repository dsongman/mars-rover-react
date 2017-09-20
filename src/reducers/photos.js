import {PHOTO_KEY_SEPARATOR, REQUEST_PHOTOS, RECEIVE_PHOTOS} from '../actions';

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
      var photosKey = action.rover + PHOTO_KEY_SEPARATOR + action.date;
      return Object.assign({}, state, {
        isFetching: false,
        [photosKey]: action.json.photos
      });
    default:
      return state;
  }
};

export default photos;
