import React, {PureComponent} from 'react';
import NavContainer from '../containers/Nav';
import PhotosListContainer from '../containers/PhotosList';

import './App.css';

/**
 * @class App
 * @extends {Component}
 */
class App extends PureComponent {
  /**
   * @override
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
