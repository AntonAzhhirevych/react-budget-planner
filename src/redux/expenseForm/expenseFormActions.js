import Types from './expenseFormTypes';

export const addExpenses = exp => ({
  type: Types.ADD_EXPENSE,
  payload: exp,
});

export const deleteExpense = id => ({
  type: Types.REMOVE_POST,
  payload: id,
});
