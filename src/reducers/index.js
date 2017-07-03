import { combineReducers } from 'redux';
import applicants from './applicants';
import drugPackages from './drug_packages';
import * as types from '../constants';

const fips_code = (state = '', action) => {
  switch (action.type) {
    case types.SET_PLAN_FIELDS:
      return action.fips_code;
    default:
      return state;
  }
}

const household_income = (state = '', action) => {
  switch (action.type) {
    case types.SET_PLAN_FIELDS:
      return action.household_income;
    default:
      return state;
  }
}

const household_size = (state = 1, action) => {
  switch (action.type) {
    case types.SET_PLAN_FIELDS:
      return action.household_size;
    default:
      return state;
  }
}

const zip_code = (state = '', action) => {
  switch (action.type) {
    case types.SET_PLAN_FIELDS:
      return action.zip_code + '12';
    default:
      return state;
  }
}

const insuranceApp = combineReducers({
  applicants,
  drugPackages,
  fips_code,
  household_income,
  household_size,
  zip_code
})

export default insuranceApp;
