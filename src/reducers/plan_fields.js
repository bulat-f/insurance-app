import * as types from '../constants';

export const fips_code = (state = '36081', action) => {
  switch (action.type) {
    case types.SET_PLAN_FIELDS:
      return action.fips_code;
    default:
      return state;
  }
}

export const household_income = (state = 55000, action) => {
  switch (action.type) {
    case types.SET_PLAN_FIELDS:
      return action.household_income;
    default:
      return state;
  }
}

export const household_size = (state = 1, action) => {
  switch (action.type) {
    case types.SET_PLAN_FIELDS:
      return action.household_size;
    default:
      return state;
  }
}

export const zip_code = (state = '11423', action) => {
  switch (action.type) {
    case types.SET_PLAN_FIELDS:
      return action.zip_code;
    default:
      return state;
  }
}
