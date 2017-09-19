import React, {PureComponent} from 'react';
import NavContainer from './NavContainer';
import PhotosListContainer from './PhotosListContainer';

import {connect} from 'react-redux';

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
        <PhotosListContainer rover={this.props.rover} date={this.props.date} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    rover: state.rover,
    date: state.date
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
