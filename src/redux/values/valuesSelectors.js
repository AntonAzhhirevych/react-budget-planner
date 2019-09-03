export const getBudget = state => state.budget;

export const getItems = state => state.expense;

export const getExpenses = state => {
  const items = getItems(state);

  return items.reduce((acc, item) => acc + +item.amount, 0);
};

export const getBalance = state => {
  const expenses = getExpenses(state);
  const budget = getBudget(state);

  return budget - expenses;
};
