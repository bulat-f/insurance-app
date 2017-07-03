import * as types from '../constants';

const drugPackage = action => ({
  id: action.id,
  med_id: action.med_id
})

const drugPackages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_DRUG_PACKAGE:
      return state.concat(drugPackage(action))
    case types.REMOVE_DRUG_PACKAGE:
      return state.filter(drugPackage => drugPackage.id !== action.id)
    default:
      return state;

  }
}

export default drugPackages;
