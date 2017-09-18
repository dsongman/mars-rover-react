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

  if (props.photos === null) {
    return <p>There was an error fetching the photos.</p>;
  }
  
  return props.photos.map(photo =>
    <Photo key={photo.id} photo={photo} />
  );
}

const PhotosList = props => (
  <div className="PhotosList">{renderPhotos(props)}</div>
);

export default PhotosList;
