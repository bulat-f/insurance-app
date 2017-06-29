import * as types from '../constants';

const applicants = (state = [], action) => {
  switch (action.type) {
    case types.ADD_APPLICANT:
      return state.concat({
        id: action.id,
        age: action.age,
        child: action.child,
        smoker: action.smoker
      })
    default:
      return state;

  }
}

export default applicants;
