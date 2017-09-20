import React, {PureComponent} from 'react';
import NavContainer from './NavContainer';
import PhotosListContainer from './PhotosListContainer';

import './App.css';

/**
 * @class App
 * @extends {Component}
 */
class App extends PureComponent {
  /**
   * @returns {Component}
   * @memberof App
   */
  render() {
    return (
      <div className="App">
        <NavContainer />
        <PhotosListContainer />
      </div>
    );
  }
}

export default (App);
