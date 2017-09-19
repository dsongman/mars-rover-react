import Nav from './Nav';

import {connect} from 'react-redux';
import {setDate, setRover} from '../actions';

const mapStateToProps = state => {
  return {
    rover: state.rover,
    date: state.date
  };
};

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

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
export default NavContainer;
