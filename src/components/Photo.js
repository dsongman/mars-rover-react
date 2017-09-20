import React from 'react';

import './Photo.css';

/**
 * Photo Component
 * 
 * @param {Object} props 
 * @returns {Component}
 */
const Photo = (props) => {
  let date = props.date;
  let photo = props.photo;
  let imgSrc = photo.img_src;
  let rover = photo.rover.name;
  let camera = photo.camera.full_name;
  return (
    <figure className="Photo">
      <img className="Photo__image" src={imgSrc} />
      <figcaption>Image from NASA's {rover} rover, taken on {date}, by the {camera}.</figcaption>
    </figure>
  );
};

export default Photo;
