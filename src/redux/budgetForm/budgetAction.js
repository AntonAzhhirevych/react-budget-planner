import Type from '../values/Type';

export const setBudget = value => ({
  type: Type.SET_BUDGET,
  payload: value,
});
