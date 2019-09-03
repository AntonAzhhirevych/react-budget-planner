import Types from './expenseFormTypes';

const ExpenseFormReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Types.ADD_EXPENSE:
      return [...state, payload];

    default:
      return state;
  }
};

export default ExpenseFormReducer;
