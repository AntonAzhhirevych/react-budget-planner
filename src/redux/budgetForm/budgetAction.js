import Type from '../Type';

export const setBudget = value => ({
  type: Type.SET_BUDGET,
  payload: value,
});
