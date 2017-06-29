import { combineReducers } from 'redux';
import applicants from './applicants';

const insuranceApp = combineReducers({
  applicants
})

export default insuranceApp;
