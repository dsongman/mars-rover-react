// Nav Actions
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
