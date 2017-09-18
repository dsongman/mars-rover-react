import React, {PureComponent} from 'react';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import Nav from './components/Nav';
import PhotosListContainer from './components/PhotosListContainer';

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
      <LocaleProvider locale={enUS}>
        <div className="App">
          <Nav />
          <PhotosListContainer />
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
