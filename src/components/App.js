import React, {PureComponent} from 'react';
import Nav from './Nav';
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
        <Nav />
        <PhotosListContainer />
      </div>
    );
  }
}

export default App;
