import Types from './expenseFormTypes';

const ExpenseFormReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Types.ADD_EXPENSE:
      return [...state, payload];
    case Types.REMOVE_POST:
      return state.filter(post => post.id !== payload);

    default:
      return state;
  }
};

export default ExpenseFormReducer;
