import React, {Component} from 'react';
import PhotosList from './PhotosList';

import {NASA_API_KEY} from '../_private.js';

/**
 * Fetches photos from NASA API.
 * 
 * @param {Date} date
 * @param {String} rover
 * @returns {Promise}
 */
async function getPhotos(date, rover) {
  let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=1000&api_key=' + NASA_API_KEY;
  url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-09-12&api_key=' + NASA_API_KEY;
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson.photos;
  } catch (error) {
    return null;
  }
};

/**
 * @class PhotosListContainer
 * @extends {Component}
 */
class PhotosListContainer extends Component {
  /**
   * Creates an instance of PhotosListContainer.
   * @memberof PhotosListContainer
   */
  constructor() {
    super();
    // Set initial state
    this.state = {
      isFetching: false,
      photos: []
    };
  }
  /**
   * @overrides
   * @memberof PhotosListContainer
   */
  componentWillMount() {
    this.setState({
      isFetching: true
    });
    getPhotos().then((result) => {
      this.setState({
        isFetching: false,
        photos: result
      });
    });
  }
  /**
   * @returns {Component}
   * @memberof PhotosListContainer
   */
  render() {
    return (
      <PhotosList photos={this.state.photos} isFetching={this.state.isFetching} />
    );
  }
}

export default PhotosListContainer;
