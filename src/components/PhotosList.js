import React from 'react';
import Photo from './Photo';

import './PhotosList.css';

/**
 * @param {Object} props 
 * @returns {Component}
 */
function renderPhotos(props) {
  if (props.isFetching) {
    return <p>Fetching…</p>;
  }

  if (!props.photos || props.photos.length === 0) {
    return <p>No images found.</p>;
  }

  return props.photos.map(photo =>
    <Photo key={photo.id} photo={photo} date={props.date} />
  );
}

/**
 * PhotosList Component
 * 
 * @param {any} props 
 * @returns {Component}
 */
const PhotosList = props => (
  <div className="PhotosList">{renderPhotos(props)}</div>
);

export default PhotosList;
