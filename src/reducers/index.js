import { combineReducers } from 'redux';
import applicants from './applicants';
import drugPackages from './drug_packages';
import { fips_code, household_income, household_size, zip_code } from './plan_fields';
import plans from './plans';

const insuranceApp = combineReducers({
  applicants,
  drugPackages,
  fips_code,
  household_income,
  household_size,
  zip_code,
  plans
})

export default insuranceApp;
