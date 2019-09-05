import Type from '../values/Type';

const budgetFormReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.SET_BUDGET:
      return payload;
    default:
      return state;
  }
};

export default budgetFormReducer;
