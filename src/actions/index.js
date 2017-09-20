import {NASA_API_KEY} from '../_private';
export const REQUEST_DATE_FORMAT = 'YYYY-MM-DD';

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
 * @param {String} rover 
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
 * @param {String} rover 
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
 * @param {String} rover 
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

const fetchPhotos = (rover, date) => {
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${NASA_API_KEY}`;
  return dispatch => {
    dispatch(requestPhotos(rover, date));
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receivePhotos(rover, date, json)));
  };
};

export const PHOTO_KEY_SEPARATOR = '-';

const shouldFetchPhotos = (state, rover, date) => {
  const roverPhotos = state.photos;
  let photoKey = rover + PHOTO_KEY_SEPARATOR + date;
  const hasPhotosOnDate = Boolean(roverPhotos[photoKey]);
  
  return !(hasPhotosOnDate || roverPhotos.isFetching);
};

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
