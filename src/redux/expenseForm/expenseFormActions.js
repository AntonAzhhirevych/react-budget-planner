import Types from './expenseFormTypes';

export const addsExpenses = exp => ({
  type: Types.ADD_EXPENSE,
  payload: exp,
});
