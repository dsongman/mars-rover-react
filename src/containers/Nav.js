import Nav from '../components/Nav';

import {connect} from 'react-redux';
import {setDate, setRover} from '../actions';

/**
 * State properties converted to props for this component.
 * 
 * @param {Object} state 
 * @returns {Object}
 */
const mapStateToProps = state => {
  return {
    rover: state.rover,
    date: state.date
  };
};

/**
 * Functions added to props to allow dispatching from the component.
 * 
 * @param {Function} dispatch 
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => {
  return {
    onClickMenuItem: rover => {
      dispatch(setRover(rover.key));
    },
    onChangeDate: (date, dateString) => {
      dispatch(setDate(date));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
