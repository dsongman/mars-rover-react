import {NASA_API_KEY} from '../_private';

/**
 * Misc. constants
 */
export const REQUEST_DATE_FORMAT = 'YYYY-MM-DD';
export const PHOTO_KEY_SEPARATOR = '-';

/**
 * @param {Moment} date 
 * @returns {Object}
 */
export const SET_DATE = 'SET_DATE';
export const setDate = date => {
  return {
    type: SET_DATE,
    date
  };
};

/**
 * @param {Array} rover 
 * @returns {Object}
 */
export const SET_ROVER = 'SET_ROVER';
export const setRover = rover => {
  return {
    type: SET_ROVER,
    rover
  };
};

/**
 * @param {Array} rover 
 * @param {String} date 
 * @returns {Object}
 */
export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
const requestPhotos = (rover, date) => {
  return {
    type: REQUEST_PHOTOS,
    rover,
    date
  };
};

/**
 * @param {Array} rover 
 * @param {String} date 
 * @param {JSON} json 
 * @returns {Object}
 */
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
const receivePhotos = (rover, date, json) => {
  return {
    type: RECEIVE_PHOTOS,
    rover,
    date,
    json
  };
};

/**
 * Fetches data from the NASA API
 * 
 * @param {String} rover 
 * @param {String} date 
 * @returns {Promise}
 */
const fetchPhotos = (rover, date) => {
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${NASA_API_KEY}`;
  return dispatch => {
    dispatch(requestPhotos(rover, date));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receivePhotos(rover, date, json)));
  };
};

/**
 * Returns true if the rover-date key isn't found in the cache and there isn't a request
 * in progress.
 * 
 * @param {Object} state 
 * @param {String} rover 
 * @param {String} date 
 * @returns {Boolean}
 */
const shouldFetchPhotos = (state, rover, date) => {
  const roverPhotos = state.photos;
  let photoKey = rover + PHOTO_KEY_SEPARATOR + date;
  const hasPhotosOnDate = Boolean(roverPhotos[photoKey]);
  
  return !(hasPhotosOnDate || roverPhotos.isFetching);
};

/**
 * Returns the array of photos given the rover and date.
 * Will return the cached copy if available and will dispatch fetchPhotos if not.
 * 
 * @param {Array} rover 
 * @param {Moment} date 
 * @returns {Promise.<Object>}
 */
export const getPhotos = (rover, date) => {
  let _rover = rover[0];
  let _date = date.format(REQUEST_DATE_FORMAT);

  return (dispatch, getState) => {
    if (!shouldFetchPhotos(getState(), _rover, _date)) {
      return Promise.resolve();
    }

    return dispatch(fetchPhotos(_rover, _date));
  };
};
