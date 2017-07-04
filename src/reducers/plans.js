import * as types from '../constants';

const plans = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_PLANS:
      return state = action.plans
    default:
      return state;

  }
}

export default plans;
