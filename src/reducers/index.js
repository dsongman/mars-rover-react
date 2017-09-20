import {combineReducers} from 'redux';
import date from './date';
import rover from './rover';
import photos from './photos';

const rootReducer = combineReducers({
  date,
  rover,
  photos
});

export default rootReducer;
