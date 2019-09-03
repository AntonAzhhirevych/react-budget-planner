import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetFormReducer from './budgetForm/budgetReducer';
import expenseFormReducer from './expenseForm/expenseFormReducer';
const reducer = combineReducers({
  budget: budgetFormReducer,
  expense: expenseFormReducer,
});

const store = createStore(reducer, devToolsEnhancer());

export default store;
