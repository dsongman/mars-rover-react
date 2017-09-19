import React, {Component} from 'react';
import PhotosList from './PhotosList';

import {NASA_API_KEY} from '../_private.js';
const REQUEST_DATE_FORMAT = 'YYYY-MM-DD';

/**
 * Fetches photos from NASA API.
 * 
 * @param {String} rover
 * @param {Moment} date
 * @returns {Promise}
 */
async function getPhotos(rover, date) {
  console.log('PhotosListContainer', rover, date);
  let _rover = rover[0];
  let _date = date.format(REQUEST_DATE_FORMAT);
  let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + _rover + '/photos?earth_date=' + _date + '&api_key=' + NASA_API_KEY;
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
   * Manages state around fetching photos
   * 
  * @param {String} rover
  * @param {Moment} date
   * @memberof PhotosListContainer
   */
  getPhotos(rover, date) {
    if (this.state.isFetching) {
      return;
    }

    this.setState({
      isFetching: true
    });
    getPhotos(rover, date).then((result) => {
      this.setState({
        isFetching: false,
        photos: result
      });
    });
  }
  /**
   * @overrides
   * @memberof PhotosListContainer
   */
  componentDidMount() {
    this.getPhotos(this.props.rover, this.props.date);
  }
  /**
   * @overrides
   * @memberof PhotosListContainer
   */
  componentWillReceiveProps(nextProps) {
    this.getPhotos(nextProps.rover, nextProps.date);
  }
  /**
   * @returns {Component}
   * @memberof PhotosListContainer
   */
  render() {
    console.log('PhotoListContainer:render');
    return (
      <PhotosList photos={this.state.photos} isFetching={this.state.isFetching} />
    );
  }
}

export default PhotosListContainer;
