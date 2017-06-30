import * as types from '../constants';

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
