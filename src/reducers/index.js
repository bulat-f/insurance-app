import { combineReducers } from 'redux';
import applicants from './applicants';
import drugPackages from './drug_packages';

const insuranceApp = combineReducers({
  applicants,
  drugPackages
})

export default insuranceApp;
