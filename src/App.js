import React, {Component} from 'react';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
      <LocaleProvider locale={enUS}>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </LocaleProvider>
    );
  }
}

export default App;
