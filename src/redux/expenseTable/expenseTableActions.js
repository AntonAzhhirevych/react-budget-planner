import Types from '../expenseForm/expenseFormTypes';

export const expenseTableAction = id => ({
  type: Types.REMOVE_POST,
  payload: id,
});
