import React, {Component} from 'react';
import PhotosList from '../components/PhotosList';

import {connect} from 'react-redux';
import {getPhotos, PHOTO_KEY_SEPARATOR, REQUEST_DATE_FORMAT} from '../actions';

/**
 * @class PhotosListContainer
 * @extends {Component}
 */
class PhotosListContainer extends Component {
  /**
   * Dispatches the getPhotos action
   * 
   * @param {Array} rover
   * @param {Moment} date
   * @memberof PhotosListContainer
   */
  getPhotos(rover, date) {
    const {dispatch} = this.props;
    dispatch(getPhotos(rover, date));
  }
  /**
   * @override
   * @memberof PhotosListContainer
   */
  componentWillMount() {
    this.getPhotos(this.props.rover, this.props.date);
  }
  /**
   * @override
   * @params {Object} nextProps
   * @memberof PhotosListContainer
   */
  componentWillUpdate(nextProps) {
    this.getPhotos(nextProps.rover, nextProps.date);
  }
  /**
   * @override
   * @returns {Component}
   * @memberof PhotosListContainer
   */
  render() {
    return (
      <PhotosList isFetching={this.props.isFetching} photos={this.props.photos} />
    );
  }
}

/**
 * State properties converted to props for this component.
 * 
 * @param {Object} state 
 * @returns {Object}
 */
const mapStateToProps = state => {
  const {date, rover, photos} = state;
  const photosKey = rover[0] + PHOTO_KEY_SEPARATOR + date.format(REQUEST_DATE_FORMAT);
  return {
    rover: rover,
    date: date,
    isFetching: photos.isFetching,
    photos: photos[photosKey]
  };
};

export default connect(mapStateToProps)(PhotosListContainer);
