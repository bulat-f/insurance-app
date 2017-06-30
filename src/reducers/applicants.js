import * as types from '../constants';

const applicant = action => ({
  id: action.id,
  age: action.age,
  child: action.child || false,
  smoker: action.smoker || false
})

const applicants = (state = [], action) => {
  switch (action.type) {
    case types.ADD_APPLICANT:
      return state.concat(applicant(action))
    case types.REMOVE_APPLICANT:
      return state.filter(applicant => applicant.id !== action.id)
    default:
      return state;

  }
}

export default applicants;
