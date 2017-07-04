import * as types from '../constants';
import VericredApi from '../api/vericredApi';

let nextApplicantId = 0;

export const addApplicant = (age, child, smoker) => ({
  type: types.ADD_APPLICANT,
  id: nextApplicantId++,
  age,
  child,
  smoker
});

export const removeApplicant = (id) => ({
  type: types.REMOVE_APPLICANT,
  id
});

export const addDrugPackage = (id, med_id) => ({
  type: types.ADD_DRUG_PACKAGE,
  id,
  med_id
})

export const removeDrugPackage = (id) => ({
  type: types.REMOVE_DRUG_PACKAGE,
  id
})

export const setPlanFields = (fields) => ({
  type: types.SET_PLAN_FIELDS,
  fips_code: fields.fips_code,
  household_income: fields.household_income,
  household_size: fields.household_size,
  zip_code: fields.zip_code
})

export const requestPlans = () => ({
  type: types.REQUEST_PLANS
})

export const receivePlans = (plans) => ({
  type: types.RECEIVE_PLANS,
  plans
})

export const findPlans = () => {
  return (dispatch, getState) => {
    dispatch(requestPlans());
    return VericredApi.findPlans(getState())
      .then(json => dispatch(receivePlans(json.plans)));
  }
}
